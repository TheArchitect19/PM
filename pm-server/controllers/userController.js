const jwt = require("jsonwebtoken");
require("dotenv").config();
const sharp = require("sharp");
const stream = require("stream");
const S3 = require("aws-sdk/clients/s3");
const fetch = require("node-fetch");
const crypto = require("crypto");

const age = 3 * 24 * 60 * 60; // 3 days => in seconds

const createToken = (data) => {
  // payload => data
  return jwt.sign({ data }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: age,
  });
};

// function to get current year
async function getYear() {
  try {
    const response = await fetch(
      "http://worldtimeapi.org/api/timezone/Etc/UTC"
    );
    const data = await response.json();
    const currentYear = new Date(data.datetime).getFullYear();
    return currentYear;
  } catch (error) {
    return null;
  }
}

// function to get date
async function getDate() {
  try {
    const response = await fetch(
      "http://worldtimeapi.org/api/timezone/Etc/UTC"
    );
    const data = await response.json();
    const currentYear = new Date(data.datetime).getFullYear();
    return new Date(data.datetime).toDateString();
  } catch (error) {
    return null;
  }
}

function hash(input) {
  const hash = crypto.createHash("md5");
  hash.update(input);
  return hash.digest("hex");
}

// endpoint to add shop of the current logged in user
const addShop = (req, res) => {
  const data = req.body;
  const phone = res.user.data.phone;
  const client = req.client;

  client.query(
    "INSERT INTO shops (owner, shop_name, shop_desc, shop_address, business_name, outside_cg, gst_no, bank_ac_no) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
    [
      phone,
      data.shop_name,
      data.shop_desc,
      data.shop_address,
      data.business_name,
      data.outside_cg,
      data.gst_no,
      data.bank_ac_no,
    ],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
      } else {
        res.status(200).send("Shop added successfully");
      }
    }
  );
};

// endpoint to update the profile(personal info) of current logged in user
const saveProfile = (req, res) => {
  const phoneLoggedIn = res.user.data.phone;
  const { name, email, whatsapp_number, address, isWhatsapp } = req.body;
  const client = req.client;

  client.query(
    "update users set name=$1, email=$2, address=$3, isWhatsapp=$4, whatsapp=$5 where phone=$6",
    [name, email, address, isWhatsapp, whatsapp_number, phoneLoggedIn],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          ok: false,
          message: "Oops, an internal server error occurred.",
          error: err,
        });
      } else {
        res
          .status(200)
          .json({ ok: true, message: "Profile updated successfully." });
      }
    }
  );
};

// endpoint to save profile picture of current logged in user
const saveProfilePic = async (req, res) => {
  const phoneLoggedIn = res.user.data.phone;
  const file = req.file;
  const client = req.client;

  if (file === null || file === undefined) {
    return res.status(500).json({ ok: false, message: "No image received." });
  }

  const year = await getYear();
  if (year === null || year === undefined) {
    res
      .status(500)
      .json({ ok: false, message: "Error fetching current year." });
  }

  const config = {
    endpoint: `us-southeast-1.linodeobjects.com/${year}/${phoneLoggedIn}`,
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
  };
  var s3 = new S3(config);
  const ext = file.originalname.slice(file.originalname.lastIndexOf(".") + 1);

  try {
    const readableStream = stream.Readable.from(file.buffer);
    const file_name = "profile." + ext;
    var params = {
      Bucket: "pm-objects",
      Key: file_name,
      Body: readableStream,
      ACL: "public-read",
      ContentLength: file.buffer.length,
    };
    s3.putObject(params, function (err, data) {
      if (err) {
        // console.error("Error uploading test file", err)
        res.status(500).json({
          ok: false,
          message: "Error uploading profile picture",
          error: err,
        });
      } else {
        const url = "https://pm-objects." + config.endpoint + "/" + file_name;
        client.query(
          "update users set profile_pic=$1 where phone=$2",
          [url, phoneLoggedIn],
          (err, results) => {
            if (err) {
              console.log(err);
              res.status(500).json({
                ok: false,
                message:
                  "A server error occurred while updating the profile picture.",
                error: err,
              });
            } else {
              res.status(200).json({
                ok: true,
                message: "Profile picture updated successfully.",
              });
            }
          }
        );
        // console.info("Test file uploaded ", data)
      }
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Error uploading profile picture",
      error: error,
    });
  }
};

const getUserInfo = (req, res) => {
  const phoneLoggedIn = res.user.data.phone;
  const client = req.client;

  client.query(
    "select * from users where phone=$1",
    [phoneLoggedIn],
    (err, results) => {
      if (err) {
        res
          .status(500)
          .json({ ok: false, message: "Server error", error: err });
      } else {
        res
          .status(200)
          .json({ ok: true, message: "Data received", value: results.rows[0] });
      }
    }
  );
};

const changePassword = (req, res) => {
  const phoneLoggedIn = res.user.data.phone;
  const client = req.client;
  const oldPassword = hash(req.body.oldPassword);
  const newPassword = hash(req.body.newPassword);

  client.query(
    "select password from users where phone=$1",
    [phoneLoggedIn],
    (err1, result1) => {
      if (err1) {
        res
          .status(500)
          .json({ ok: false, message: "Server error", error: err1 });
      } else {
        const oldPwd = result1.rows[0].password;
        console.log(oldPwd);
        if (oldPassword === oldPwd) {
          client.query(
            "update users set password=$1 where phone=$2",
            [newPassword, phoneLoggedIn],
            (err2, result2) => {
              if (err2) {
                res
                  .status(500)
                  .json({ ok: false, message: "Server error", error: err2 });
              } else {
                res.status(200).json({ ok: true, message: "Password updated" });
              }
            }
          );
        } else {
          res
            .status(401)
            .json({ ok: false, message: "Incorrect old password" });
        }
      }
    }
  );
};

const updateNumber = (req, res) => {
  const phoneLoggedIn = res.user.data.phone;
  const client = req.client;
  const { phone } = req.body;

  client.query(
    "update users set phone=$1 where phone=$2",
    [phone, phoneLoggedIn],
    (err, results) => {
      if (err) {
        res
          .status(500)
          .json({ ok: false, message: "Server error", error: err });
      } else {
        const token = createToken({ phone: phone });
        res.cookie("login", token, {
          httpOnly: true,
          maxAge: age * 1000,
          SameSite: "none",
        });
        // res.cookie('login', token, {
        // 	httpOnly: true,
        // 	secure: true,
        // 	sameSite: 'none',
        // 	maxAge: age * 1000,
        // 	domain: 'pandrimarket.com',
        // });
        res.status(200).json({ ok: true, message: "Phone number updated" });
      }
    }
  );
};

async function uploadAllImages(
  s3,
  files,
  images,
  id,
  res,
  shop_name,
  name,
  config
) {
  for (let i = 1; i <= files.length; i++) {
    const file = files[i - 1];
    const ext = file.originalname.slice(file.originalname.lastIndexOf(".") + 1);
    try {
      const readableStream = stream.Readable.from(file.buffer);
      const file_name = `${id}_${shop_name}_${name}_${i}.` + ext;
      var params = {
        Bucket: "pm-objects",
        Key: file_name,
        Body: readableStream,
        ACL: "public-read",
        ContentLength: file.buffer.length,
      };
      await new Promise((resolve, reject) => {
        s3.putObject(params, function (err, data) {
          if (err) {
            // client.end();
            reject({
              ok: false,
              message: "Error uploading images",
              error: err,
            });
          } else {
            const url =
              "https://pm-objects." + config.endpoint + "/" + file_name;
            console.log(`product${i} uploaded`);
            images.push(url);
            resolve();
          }
        });
      });
    } catch (error) {
      res
        .status(500)
        .json({ ok: false, message: "Error uploading images", error: error });
    }
  }
}

// end point to upload a product
const uploadProduct = (req, res) => {
  const phoneLoggedIn = res.user.data.phone;
  const client = req.client;
  const files = req.files;

  if (!files || files.length === 0) {
    return res.status(400).json({ ok: false, error: "No files provided" });
  }

  const { shop_name, name, desc, stock, price, brand, gender, category } =
    req.body;

  client.query("BEGIN", (err) => {
    if (err) {
      return client.query("ROLLBACK", () => {
        client.end();
        res
          .status(500)
          .json({ ok: false, message: "Error while beginning", error: err });
      });
    }

    client.query(
      "insert into products (owner, shop_name, name, description, stock, price, brand, gender) values ($1, $2, $3, $4, $5, $6, $7, $8) returning id",
      [phoneLoggedIn, shop_name, name, desc, stock, price, brand, gender],
      async (err1, res1) => {
        if (err1) {
          return client.query("ROLLBACK", () => {
            client.end();
            res.status(500).json({
              ok: false,
              message: "Error saving text data of the product",
              error: err1,
            });
          });
        }

        const id = res1.rows[0].id;
        console.log(id);
        const date = await getDate();
        const config = {
          endpoint: `us-southeast-1.linodeobjects.com/product_images/${phoneLoggedIn}/${date}`,
          accessKeyId: process.env.accessKeyId,
          secretAccessKey: process.env.secretAccessKey,
        };
        var s3 = new S3(config);

        // to store all the image urls
        let images = [];

        // loop to upload images on bucket, and push the urls in images array
        await uploadAllImages(
          s3,
          files,
          images,
          id,
          res,
          shop_name,
          name,
          config
        );

        // save images to the database
        client.query(
          "insert into images (link, id) select unnest($1::text[]), $2::integer",
          [images, id],
          (err2, res2) => {
            if (err2) {
              return client.query("ROLLBACK", () => {
                client.end();
                res.status(500).json({
                  ok: false,
                  message: "Error saving images of the product",
                  error: err2,
                });
              });
            }

            client.query(
              "insert into categories (category, id) SELECT unnest($1::text[]), $2::integer",
              [category, id],
              (err3, res3) => {
                if (err3) {
                  return client.query("ROLLBACK", () => {
                    client.end();
                    res.status(500).json({
                      ok: false,
                      message: "Error saving categories of the product",
                      error: err3,
                    });
                  });
                }

                client.query("COMMIT", (err4) => {
                  if (err4) {
                    // Handle error and rollback transaction
                    return client.query("ROLLBACK", () => {
                      client.end();
                      res.status(500).json({
                        ok: false,
                        message: "Error while commit",
                        error: err4,
                      });
                    });
                  }
                  client.end();
                  res.status(200).json({ ok: true, message: "Product saved" });
                });
              }
            );
          }
        );
      }
    );
  });
};


module.exports = {
  addShop,
  saveProfile,
  saveProfilePic,
  getUserInfo,
  changePassword,
  updateNumber,
  uploadProduct,
};
