import React, { useState, useEffect, useRef } from "react";
import styles from "./Profile.module.css";
import dp from "../assets/img/dp.jpg";
import { AiFillFacebook, AiFillGoogleSquare } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";
import { GrMapLocation } from "react-icons/gr";
import Navbar from "../components/NavHom";
// import url_json from "../url.json";

// const url = url_json.url;

const Profile = () => {
  const [log, setLog] = useState(false);
  const [activeComponent, setActiveComponent] = useState("profile1");

  // useEffect(() => {
  //   async function checkLogin() {
  //     await fetch(`${url}/checkLogin`, {
  //       method: "GET",
  //       credentials: "include"
  //     })
  //       .then(res => res.json())
  //       .then(res => {
  //         if (res === 0) {
  //           console.log(res);
  //           // user is logged in
  //           setLog(true);
  //         }
  //         else {
  //           setLog(false);
  //         }
  //       })
  //   };

  //   checkLogin();
  // }, []);

  const handleNavClick = (component) => {
    setActiveComponent(component);
  };
  const getButtonStyle = (component) => {
    return component === activeComponent
      ? { backgroundColor: "white", color: "black" }
      : {};
  };

  // _____________________
  const [selectedImage, setSelectedImage] = useState(dp);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };
  // _________________________

  return (
    <>
      <Navbar data={log} />
      <div className={styles.parent}>
        <div className={styles.sidenav}>
          <p>MY PROFILE</p>
          <div>
            <div>
              <img
                src={selectedImage}
                alt="Preview Image"
                style={{ width: "200px", height: "200px" }}
              />
              <div className={styles.customfileupload} onClick={handleClick}>
                <input
                  type="file"
                  id="upload-input"
                  accept="image/*"
                  onChange={handleImageChange}
                  ref={fileInputRef}
                />
                <span>Upload Image</span>
              </div>
              <p>Maxmium Upload Size is 1 MB</p>
            </div>
            <div>
              <div>
                <AiFillGoogleSquare
                  size={30}
                  style={{ marginRight: "0.5rem", cursor: "pointer" }}
                />
                <AiFillFacebook size={30} style={{ cursor: "pointer" }} />
              </div>
            </div>
          </div>
          <ul>
            <li
              onClick={() => handleNavClick("profile1")}
              style={getButtonStyle("profile1")}
            >
              PERSONAL DETAILS
              <p>Fill up your Personal details here</p>
            </li>
            <li
              onClick={() => handleNavClick("profile2")}
              style={getButtonStyle("profile2")}
            >
              CHANGE MOBILE NUMBER
              <p>You can change your mobile number anytime from this section</p>
            </li>
            <li
              onClick={() => handleNavClick("profile3")}
              style={getButtonStyle("profile3")}
            >
              CHANGE PASSWORD
              <p>You can change your password anytime from this section</p>
            </li>
          </ul>
        </div>
        <div className={styles.rightPart}>
          {activeComponent === "profile1" && <Profile1 />}
          {activeComponent === "profile2" && <Profile2 />}
          {activeComponent === "profile3" && <Profile3 />}
        </div>
      </div>
    </>
  );
};

export default Profile;

// _________________________________________________________________

const Profile1 = () => {
  return (
    <div>
      <div className={styles.personalDetails}>
        <form action="">
          <div className={styles.labelInloc}>
            Full Name
            <div className={styles.inloc}>
              <BiUser />
              <input
                type="text"
                name="name"
                placeholder="Enter your full name here"
              />
            </div>
          </div>
          <div className={styles.labelInloc}>
            Email ID
            <div className={styles.inloc}>
              <AiOutlineMail />
              <input
                type="email"
                name="name"
                placeholder="Enter your email ID here"
              />
            </div>
          </div>
          <div className={styles.labelInloc}>
            Whatsapp Number
            <div className={styles.inloc}>
              <IoIosCall />
              <input
                type="number"
                name="name"
                placeholder="Enter your email ID here"
              />
            </div>
          </div>
          <div className={styles.labelInloc2}>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">
              {" "}
              Do you want to receive updates on Whatsapp ?{" "}
            </label>
            <br></br>
          </div>
          <div className={styles.labelInloc}>
            Address
            <div className={styles.inloc}>
              <GrMapLocation />
              <input
                type="text"
                name="name"
                placeholder="Enter your current address"
              />
            </div>
          </div>
          <div className={styles.labelInloc}>
            Password
            <div className={styles.inloc}>
              <RiLockPasswordFill />
              <input
                type="password"
                name="name"
                placeholder="Enter your password here"
              />
            </div>
          </div>
          <div className={styles.labelInloc}>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ___________________________________________________________

const Profile2 = () => {
  return (
    <div>
      <div className={styles.personalDetails}>
        <form action="">
          <div className={styles.labelInloc}>
            Existing/ Old Phone Number
            <div className={styles.inloc}>
              <IoIosCall />
              <input
                type="number"
                name="name"
                placeholder="Enter your old phone number"
              />
            </div>
          </div>
          <div className={styles.labelInloc}>
            New Phone Number
            <div className={styles.inloc}>
              <IoIosCall />
              <input
                type="number"
                name="name"
                placeholder="Enter your new phone number"
              />
            </div>
          </div>
          <div className={styles.labelInloc}>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

//   _____________________________________________________________________

const Profile3 = () => {
  return (
    <div>
      <div className={styles.personalDetails}>
        <form action="">
          <div className={styles.labelInloc}>
            Existing/ Old Pasword
            <div className={styles.inloc}>
              <RiLockPasswordFill />
              <input
                type="password"
                name="name"
                placeholder="Enter your old password"
              />
            </div>
          </div>
          <div className={styles.labelInloc}>
            New Password
            <div className={styles.inloc}>
              <RiLockPasswordFill />
              <input
                type="password"
                name="name"
                placeholder="Enter your new password"
              />
            </div>
          </div>
          <div className={styles.labelInloc}>
            Confirm New Password
            <div className={styles.inloc}>
              <RiLockPasswordFill />
              <input
                type="password"
                name="name"
                placeholder="Enter your new password"
              />
            </div>
          </div>
          <div className={styles.labelInloc}>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
