const jwt = require("jsonwebtoken");
require('dotenv').config();
const sharp = require('sharp');
const stream = require('stream');
const S3 = require('aws-sdk/clients/s3')
const fetch = require('node-fetch');

// function to get current year
async function getYear() {
	try {
		const response = await fetch('http://worldtimeapi.org/api/timezone/Etc/UTC');
		const data = await response.json();
		const currentYear = new Date(data.datetime).getFullYear();
		return currentYear;
	} catch (error) {
		return null;
	}
}

// endpoint to add shop of the current logged in user
const addShop = (req, res) => {
	const data = req.body;
	const phone = res.user.data.phone;
	const client = req.client;

	client.query('INSERT INTO shops (owner, shop_name, shop_desc, shop_address, business_name, outside_cg, gst_no, bank_ac_no) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [phone, data.shop_name, data.shop_desc, data.shop_address, data.business_name, data.outside_cg, data.gst_no, data.bank_ac_no], (err, results) => {
		if (err) {
			console.error(err);
			res.status(500).send('Internal Server Error');
		} else {
			res.status(200).send('Shop added successfully');
		}
	});
}

// endpoint to update the profile(personal info) of current logged in user
const saveProfile = (req, res) => {
	const phoneLoggedIn = res.user.data.phone;
	const { name, email, address, isWhatsapp, password } = req.body;
	const client = req.client;

	client.query('update users set name=$1, email=$2, address=$3, isWhatsapp=$4, password=$5 where phone=$6', [name, email, address, isWhatsapp, password, phoneLoggedIn], (err, results) => {
		if (err) {
			console.log(err);
			res.status(500).json({ ok: false, message: "Oops, an internal server error occurred.", error: err });
		}
		else {
			res.status(200).json({ ok: true, message: "Profile updated successfully." });
		}
	})
}

// endpoint to save profile picture of current logged in user
const saveProfilePic = async (req, res) => {
	const phoneLoggedIn = res.user.data.phone;
	const file = req.file;
	const client = req.client;

	if (file === null || file === undefined) {
		res.status(500).json({ ok: false, message: "No image received." });
	}

	const year = await getYear();
	if (year === null || year === undefined) {
		res.status(500).json({ ok: false, message: "Error fetching current year." });
	}

	const config = {
		endpoint: `us-southeast-1.linodeobjects.com/${year}/${phoneLoggedIn}`,
		accessKeyId: process.env.accessKeyId,
		secretAccessKey: process.env.secretAccessKey
	}
	var s3 = new S3(config)
	const ext = file.originalname.slice(file.originalname.lastIndexOf('.') + 1);

	try {
		const readableStream = stream.Readable.from(file.buffer);
		const file_name = 'profile.' + ext;
		var params = {
			Bucket: 'pm-objects',
			Key: file_name,
			Body: readableStream,
			ACL: 'public-read',
			ContentLength: file.buffer.length
		}
		s3.putObject(params, function (err, data) {
			if (err) {
				// console.error("Error uploading test file", err)
				res.status(500).json({ ok: false, message: "Error uploading profile picture", error: err });
			} else {
				const url = 'https://pm-objects.' + config.endpoint + '/' + file_name;
				client.query('update users set profile_pic=$1 where phone=$2', [url, phoneLoggedIn], (err, results) => {
					if (err) {
						console.log(err);
						res.status(500).json({ ok: false, message: "A server error occurred while updating the profile picture.", error: err });
					}
					else {
						res.status(200).json({ ok: true, message: "Profile picture updated successfully." });
					}
				})
				// console.info("Test file uploaded ", data)
			}
		})
	} catch (error) {
		res.status(500).json({ ok: false, message: "Error uploading profile picture", error: error });
	}
}

module.exports = { addShop, saveProfile, saveProfilePic };