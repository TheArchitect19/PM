import { React, useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import home from "../assets/svg/home.png";
import ll from "../assets/svg/ll.png";
import lr from "../assets/svg/lr.png";
import styles from "./Hero.module.css";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { firebase, auth } from './firebase copy';
import url_json from "../url.json";

const url = url_json.url;

const Navbar = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const redirect = searchParams.get('redirect');
  const [state, setState] = useState({
    phone: "",
  });
  const [password, setPassword] = useState({
    password: ""
  });

  const [otpLogin, setOtpLogin] = useState(false);
  const [show, setShow] = useState(false);
  const [tog, setTog] = useState(false);
  const [otp, setotp] = useState('');
  const [final, setfinal] = useState('');

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
            window.location.href = "/";
          }
        })
    }
    checkLogin();
  });

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

  function toggle() {
    setTog(!tog);
  }
  function handle(e) {
    const data = { ...password };
    data[e.target.name] = e.target.value;
    setPassword(data);
  }

  async function loginWithOtp() {
    if (state.phone.length < 12) {
      alert("Please enter a valid phone number.")
    }
    else {

      if (state.phone) {
        const res = await checkPhoneExists();
        if (res === 1) {
          let apiCall = `${url}/login`;
          if (redirect !== null) {
            apiCall = `${url}/login?redirect=${redirect}`;
          }
          await fetch(apiCall, {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify({ phone: state.phone, password: password.password, otp: true }),
          })
            .then(res => {
              return res.json();
            })
            .then(res => {
              console.log(res);
              // Handle the response or perform any necessary actions
              if (res.ok) {
                window.location.href = res.redirectUrl;
              }
              else {
                alert(res.message);
              }
            })
            .catch(err => {
              alert(err);
            });
        }
        else if (res === 0) {
          alert("This phone number not registered with us. Please register");
        }
        else {
          alert("Sorry for the error, it will be resolved soon.");
        }
      }
      else {
        alert("Invalid input");
      }
    }
  }

  //login fetch
  async function login() {
    if (state.phone.length < 12) {
      alert("Please enter a valid phone number.")
    }
    else {

      if (state.phone && password.password) {
        const res = await checkPhoneExists();
        if (res === 1) {
          let apiCall = `${url}/login`;
          if (redirect !== null) {
            apiCall = `${url}/login?redirect=${redirect}`;
          }
          await fetch(apiCall, {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify({ phone: state.phone, password: password.password, otp: false }),
          })
            .then(res => {
              return res.json();
            })
            .then(res => {
              console.log(res);
              // Handle the response or perform any necessary actions
              if (res.ok) {
                window.location.href = res.redirectUrl;
              }
              else {
                alert(res.message);
              }
            })
            .catch(err => {
              alert(err);
            });
        }
        else if (res === 0) {
          alert("This phone number not registered with us. Please register");
        }
        else {
          alert("Sorry for the error, it will be resolved soon.");
        }
      }
      else {
        alert("Invalid input");
      }
    }
  }

  async function check() {
    if (state.phone.length >= 12) {

      // use this block to bypass otp verification

      // otp verification bypass block ends

      const res = await checkPhoneExists();
      if (res === 1) {
        // send otp
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
      else if (res === 0) {
        alert("This phone number not registered with us. Please register");
      }
      else {
        alert("Sorry for the error, it will be resolved soon.");
      }
    }
    else {
      alert("Please enter a valid phone number");
    }
  }
  const ValidateOtp = () => {
    if (otp === null || final === null)
      return;
    final.confirm(otp).then((result) => {
      // success
      loginWithOtp();
    }).catch((err) => {
      alert("Invalid OTP, please try again.");
      window.location.reload();
    })
  }

  function click() {
    window.location.href = "/welcome";
  }
  return (
    <>
      <div style={{ backgroundImage: `url(${home})`, backgroundSize: "cover", backgroundPosition: "center center", height: "100vh" }} className={styles.colnav}>
        <div className={styles.cardoverlay} style={{ height: '100vh' }}>
          <div className={styles.tp}>

          </div>

          <p className={styles.t1}>Shop At Pandri Market</p>

          <div className={styles.dt2}>
            <img className={styles.ll} src={ll} alt="" />
            <p className={styles.t2}>Start Selling Online and earn more</p>
            <img className={styles.lr} src={lr} alt="" />

          </div>
          <div className={styles.login}>
            <h1>Login</h1>
            <p>Please enter your details to continue</p>

            {tog ? <>
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
            </> : <> <div style={{ color: "black" }}>
              <PhoneInput
                countryCallingCodeEditable={false}
                country={'in'}
                value={state.phone}
                onChange={phone => setState({ phone })}
              />
              <br></br>
              <input type="text" name="password" placeholder="Enter your password" onChange={(e) => handle(e)} style={{ width: '300px' }} />
              <br></br>
              <button onClick={login}>Login</button>
            </div>
            </>
            }
            <button style={{ width: '200px' }} onClick={toggle}>{!tog ? <>Login with otp instead?</> : <>Login with your password</>}</button>
            {/* <button onClick={click}>Click</button> */}

            <p>New user?&nbsp;<a href="/signup">Register Now</a> </p>
          </div>

        </div>
      </div >
    </>
  );
};

export default Navbar;
