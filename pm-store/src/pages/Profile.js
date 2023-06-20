import React, { useState, useEffect } from 'react';
import styles from "./Profile.module.css";
import dp from "../assets/GirlPic.png";
import {
  AiFillFacebook,
  AiFillGoogleSquare,
} from "react-icons/ai";
import {
  AiOutlineMail,
} from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";
import { GrMapLocation } from "react-icons/gr";
import Navbar from '../components/NavHom';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { firebase, auth } from '../components/firebase';
import url_json from "../url.json";

const url = url_json.url;

const Profile = () => {
  const [activeComponent, setActiveComponent] = useState('profile1');
  const [log, setLog] = useState(false);

  const [p_info, set_p_info] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp_number: "",
    address: "",
    oldPassword: "",
    newPassword: "",
    newPasswordRep: "",
    oldPassword_input: "",
    aadhar: "",
    pan: "",
    profile_pic: "",
    isWhatsapp: null,
  });

  const handleInfoChange = (updatedInfo) => {
    set_p_info(updatedInfo);
  };

  useEffect(() => {
    async function checkLogin() {
      await fetch(`${url}/checkLogin`, {
        method: "GET",
        credentials: "include"
      })
        .then(res => res.json())
        .then(res => {
          if (res === 0) {
            // user is logged in
            setLog(true);
          }
          else {
            alert("Please login to continue.");
            window.location.href = "/";
            setLog(false);
          }
        })
    };

    async function getUser() {
      await fetch(`${url}/getUserInfo`, {
        method: "GET",
        credentials: "include"
      })
        .then(res => res.json())
        .then(res => {
          if (res.ok) {
            if (res.isWhatsapp === "true") {
              res.isWhatsapp = true;
            }
            else {
              res.isWhatsapp = false;
            }
            set_p_info({
              ...p_info,
              name: res.value.name,
              email: res.value.email,
              phone: res.value.phone,
              whatsapp_number: res.value.whatsapp,
              address: res.value.address,
              oldPassword: res.value.password,
              aadhar: res.value.aadhar,
              pan: res.value.pan,
              profile_pic: res.value.profile_pic,
              isWhatsapp: res.value.iswhatsapp,
            })
          }
          else {
            alert(res.message);
          }
        })
    }
    checkLogin();
    getUser();
  }, []);

  const handleNavClick = (component) => {
    setActiveComponent(component);
  };
  const getButtonStyle = (component) => {
    return component === activeComponent ? { backgroundColor: 'white', color: 'black' } : {};
  };
  const getButtonStyle2 = (component) => {
    return component === activeComponent ? { backgroundColor: 'white', width: "30px", alignSelf: "end", borderRadius: "50% 0 0 0" } : {};
  };
  const getButtonStyle3 = (component) => {
    return component === activeComponent ? { backgroundColor: 'white', width: "30px", alignSelf: "end" } : {};
  };
  return (
    <>
      <Navbar data={log} />
      <div className={styles.parent}>
        <div className={styles.sidenav}>
          <p>MY PROFILE</p>
          <div>
            <div>
              <img src={dp} alt="" />
            </div>
            <div>
              <a>Upload Photo</a>
              <p>Maxmium Upload Size is 1 MB</p>
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
            <li onClick={() => handleNavClick('profile1')}
              style={getButtonStyle('profile1')}>
              PERSONAL DETAILS
              <p>Fill up your Personal details here</p>
            </li>
            <li onClick={() => handleNavClick('profile2')}
              style={getButtonStyle('profile2')}>
              CHANGE MOBILE NUMBER
              <p>You can change your mobile number anytime from this section</p>
            </li>
            <li onClick={() => handleNavClick('profile3')}
              style={getButtonStyle('profile3')}>
              CHANGE PASSWORD
              <p>You can change your password anytime from this section</p>
            </li>
          </ul>
        </div>
        <div className={styles.rightPart}>
          {activeComponent === 'profile1' && <Profile1 p_info={p_info} onInfoChange={handleInfoChange} />}
          {activeComponent === 'profile2' && <Profile2 />}
          {activeComponent === 'profile3' && <Profile3 p_info={p_info} onInfoChange={handleInfoChange} />}
        </div>
      </div>
    </>
  );
};

export default Profile;

// _________________________________________________________________

const Profile1 = ({ p_info, onInfoChange }) => {
  const handleInputChange = (e) => {
    let { name, value } = e.target;

    if (name === "isWhatsapp") {
      onInfoChange({
        ...p_info,
        isWhatsapp: !p_info.isWhatsapp
      })
    }
    else {
      const updatedInfo = { ...p_info, [name]: value };
      onInfoChange(updatedInfo);
    }
  };
  async function save_p_info(e) {
    e.preventDefault();
    console.log(p_info);
    await fetch(`${url}/saveProfile`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(p_info)
    })
      .then(res => res.json())
      .then(res => {
        if (res.ok) {
          alert(res.message);
          window.location.reload();
        }
        else {
          alert(res.message);
        }
      })
  }
  return (
    <div>
      <div className={styles.personalDetails}>
        <form onSubmit={save_p_info}>
          <div className={styles.labelInloc}>
            Full Name
            <div className={styles.inloc}>
              <BiUser />
              <input
                type="text"
                name="name"
                placeholder="Enter your full name here"
                value={p_info.name}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={styles.labelInloc}>
            Email ID
            <div className={styles.inloc}>
              <AiOutlineMail />
              <input
                type="email"
                name="email"
                placeholder="Enter your email ID here"
                value={p_info.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={styles.labelInloc}>
            Whatsapp Number
            <div className={styles.inloc}>
              <IoIosCall />
              <PhoneInput
                countryCallingCodeEditable={false}
                country={'in'}
                value={p_info.whatsapp_number}
                onChange={phone => onInfoChange({ ...p_info, whatsapp_number: phone })}
              />
            </div>
          </div>
          <div className={styles.labelInloc2}>
            <input
              type="checkbox"
              id="vehicle1"
              name="isWhatsapp"
              checked={p_info.isWhatsapp ? true : false}
              onChange={handleInputChange}
            />
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
                name="address"
                placeholder="Enter your current address"
                value={p_info.address}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={styles.labelInloc}>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

// ___________________________________________________________

const Profile2 = () => {
  const [show, setShow] = useState(false);
  const [otp, setotp] = useState('');
  const [otpLogin, setOtpLogin] = useState(false);
  const [final, setfinal] = useState('');
  const [state, setState] = useState({
    phone: "",
  });

  async function updateNumber() {
    await fetch(`${url}/updateNumber`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(state),
      credentials: 'include'
    })
      .then(res => res.json())
      .then(res => {
        if (res.ok) {
          alert(res.message);
          window.location.reload();
        }
        else alert(res.message);
      })
      .catch(err => {
        alert(err);
      })
  }

  const ValidateOtp = () => {
    if (otp === null || final === null)
      return;
    final.confirm(otp).then((result) => {
      // success
      updateNumber();
    }).catch((err) => {
      alert("Invalid OTP, please try again.");
    })
  }
  async function checkPhoneExists() {
    const response = await fetch(`${url}/checkPhoneExists`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(state),
    });
    const data = await response.json();
    return data;
  }

  async function check() {
    const phoneExists = await checkPhoneExists();
    if (phoneExists === 1) {
      alert("A user with this phone number already exists");
    }
    else if (state.phone.length < 12) {
      alert("Please enter a valid phone number.")
    }
    else {
      const number = "+" + state.phone;
      let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
      auth.signInWithPhoneNumber(number, verify).then((result) => {
        setfinal(result);
        alert("OTP Sent");
        setShow(true);
      })
        .catch((err) => {
          alert(err);
          window.location.reload();
        });
    }
  }

  return (
    <div>
      <div className={styles.personalDetails}>
        <form>
          <div className={styles.labelInloc} style={{ color: "black", display: !show ? "block" : "none" }}>
            <div className={styles.inloc}>
              <IoIosCall />
              <PhoneInput
                countryCallingCodeEditable={false}
                country={'in'}
                value={state.phone}
                onChange={phone => setState({ phone })}
              />
            </div>
            <br /><br />
            <div id="recaptcha-container"></div>
            <div className={styles.labelInloc}>
              <button type='button' onClick={check}>Send OTP</button>
            </div>
          </div>

          <div className={styles.labelInloc} style={{ display: show ? "block" : "none" }}>
            <div className={styles.inloc}>
              <RiLockPasswordFill />
              <input type="text" placeholder={"Enter your OTP"}
                onChange={(e) => { setotp(e.target.value) }} />
            </div>
            <div className={styles.labelInloc}>
              <button type='button' onClick={ValidateOtp}>Verify</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

//   _____________________________________________________________________

const Profile3 = ({ p_info, onInfoChange }) => {
  const handleInputChange = (e) => {
    let { name, value } = e.target;

    const updatedInfo = { ...p_info, [name]: value };
    onInfoChange(updatedInfo);
  };

  async function changePassword() {
    if (p_info.oldPassword_input === p_info.oldPassword || p_info.oldPassword === null) {
      if (p_info.newPassword !== "") {
        if (p_info.newPassword === p_info.newPasswordRep) {
          await fetch(`${url}/changePassword`, {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(p_info)
          })
            .then(res => res.json())
            .then(res => {
              if (res.ok) {
                alert(res.message);
                window.location.reload();
              }
              else alert(res.message);
            })
            .catch(err => {
              alert("Oops, an error occurred!!!");
              console.log(err);
            })
        }
        else {
          alert("Passwords don't match");
        }
      }
      else alert("Password can't be empty.");
    }
    else {
      alert("Incorrect old password");
    }
  }
  return (
    <div>
      <div className={styles.personalDetails}>
        <form>
          <div className={styles.labelInloc}>
            Existing/ Old Pasword
            <div className={styles.inloc}>
              <RiLockPasswordFill />
              <input
                type="password"
                name="oldPassword_input"
                placeholder="Enter your old password or Leave blank if not set up"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={styles.labelInloc}>
            New Password
            <div className={styles.inloc}>
              <RiLockPasswordFill />
              <input
                type="password"
                name="newPassword"
                placeholder="Enter your new password"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={styles.labelInloc}>
            Confirm New Password
            <div className={styles.inloc}>
              <RiLockPasswordFill />
              <input
                type="password"
                name="newPasswordRep"
                placeholder="Enter your new password"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={styles.labelInloc}>
            <button type="button" onClick={changePassword}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}