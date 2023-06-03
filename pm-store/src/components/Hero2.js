import { React, useState } from "react";
import home from "../assets/svg/home.png";
import ll from "../assets/svg/ll.png";
import lr from "../assets/svg/lr.png";
import styles from "./Hero.module.css";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { firebase, auth } from './firebase';

const url = "http://localhost:5000";

const Navbar = () => {
  const [state, setState] = useState({
    phone: "",
  });

  const [otp, setotp] = useState('');
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState('');
  const [showPwdField, setPwd] = useState(false);
  const [password, setPassword] = useState({
    password: ""
  })

  function handle(e) {
    const data = {...password};
    data[e.target.name] = e.target.value;
    setPassword(data);
  }

  async function check() {
    if (state.phone.length >= 12) {
      
      // use this block to bypass otp verification
      await fetch(`${url}/signup`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(state),
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          if (res === 0) {
            alert("Phone number registered");
            setPwd(true);
          }
          else {
            alert("Sorry for the error, it will be resolved soon.");
          }
        });
        // otp verification bypass block ends

      // await fetch(`${url}/checkPhoneExists`, {
      //   method: "POST",
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      //   body: JSON.stringify(state),
      // })
      //   .then(res => res.json())
      //   .then(res => {
      //     if (res === 0) {
      //       // send otp
      //       const number = "+" + state.phone;
      //       let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
      //       auth.signInWithPhoneNumber(number, verify).then((result) => {
      //         setfinal(result);
      //         alert("OTP Sent");
      //         setshow(true);
      //       })
      //         .catch((err) => {
      //           alert(err);
      //           window.location.reload();
      //         });
      //     }
      //     else if (res === 1) {
      //       alert("Phone number already registered. Please login");
      //     }
      //     else {
      //       alert("Sorry for the error, it will be resolved soon.");
      //     }
      //   })
    }
    else {
      alert("Please enter a valid phone number");
    }
  }
  async function register() {
    await fetch(`${url}/signup`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res === 0) {
          alert("Registered");
          setPwd(true);
        }
        else {
          alert("Sorry for the error, it will be resolved soon.");
        }
      });
  }

  //function to save password
  async function savePassword() {
    if (password.password) {
      await fetch(`${url}/savePassword`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ password: password.password }),
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          // Handle the response or perform any necessary actions
          alert("Password saved successfully");
        });
    } else {
      alert("Please enter a password");
    }
  }


  // Validate OTP
  const ValidateOtp = () => {
    if (otp === null || final === null)
      return;
    final.confirm(otp).then((result) => {
      // success
      register();
    }).catch((err) => {
      alert("Wrong code");
    })
  }
  return (
    <>
      <div style={{ backgroundImage: `url(${home})`, backgroundSize: "cover", backgroundPosition: "center center" }} className={styles.colnav}>
        <div className={styles.cardoverlay}>
          <div className={styles.tp}>

          </div>

          <p className={styles.t1}>Shop At Pandri Market</p>

          <div className={styles.dt2}>
            <img className={styles.ll} src={ll} alt="" />
            <p className={styles.t2}>Start Selling Online and earn more</p>
            <img className={styles.lr} src={lr} alt="" />

          </div>
          <div className={styles.login}>
            <h1>SignUp</h1>

            {showPwdField ?
              <>
                Please set up a password for more security.
                <input type="password" name="password" placeholder="password" onChange={(e) => handle(e)} />
                <button onClick={savePassword}>Save</button>
                <button onClick={() => {window.location.href='/welcome'}}>Skip for later</button>
              </>
              : <div>
                <p>Please enter your phone number to continue</p>
                <div style={{ color: "black", display: !show ? "block" : "none" }}>
                  <PhoneInput
                    countryCallingCodeEditable={false}
                    country={'in'}
                    value={state.phone}
                    onChange={phone => setState({ phone })}
                  />
                  <br /><br />
                  <div id="recaptcha-container"></div>
                  <button onClick={check}>Send OTP</button>
                </div>
                <div style={{ display: show ? "block" : "none" }}>
                  <input type="text" placeholder={"Enter your OTP"}
                    onChange={(e) => { setotp(e.target.value) }}></input>
                  <button onClick={ValidateOtp}>Verify</button>
                </div>
              </div>
            }
          </div>


        </div>
      </div>

    </>
  );
};

export default Navbar;
