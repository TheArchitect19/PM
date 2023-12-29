import { React, useState, useContext } from "react";
import home from "../assets/svg/home.png";
import ll from "../assets/svg/ll.png";
import lr from "../assets/svg/lr.png";
import styles from "./Hero.module.css";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useGoogleLogin } from '@react-oauth/google';
import GoogleButton from 'react-google-button'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthContext from "../context/AuthContext";
import urls from '../urls.json';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const ref = params.get('ref');

  const [state, setState] = useState({
    phone: "",
  });
  const [email, setEmail] = useState("");
  // const [otp, setotp] = useState('');
  // const [show, setshow] = useState(false);
  // const [final, setfinal] = useState('');
  // const [showPwdField, setPwd] = useState(false);
  // const [password, setPassword] = useState({
  //   password: ""
  // });
  const [askPhone, setAskPhone] = useState(false);
  const contextData = useContext(AuthContext);

  // function handle(e) {
  //   const data = { ...password };
  //   data[e.target.name] = e.target.value;
  //   setPassword(data);
  // }

  const fetchEmail = async (codeResponse) => {
    try {
      const res = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`);
      setEmail(res.data.email);
      try {
        const res1 = await axios.post(`${urls.server}/api/auth/login`, {
          email: res.data.email,
          type: 'seller'
        });
        localStorage.setItem('user', res1.data.token);
        contextData.setAuth(res1.data.token);
        ref ? navigate(`/${ref}`) : navigate("/");
      }
      catch (error) {
        console.log("Couldn't log in");
        setAskPhone(true);
      }
    }
    catch (error) {
      alert("Error while fetching email");
      setAskPhone(true);
    }
  }

  const googleClick = useGoogleLogin({
    onSuccess: (codeResponse) => fetchEmail(codeResponse),
    onError: (error) => alert("Error while fetching email")
  });

  const signup = async () => {
    try {
      const res = await axios.post(`${urls.server}/api/auth/signup`, {
        email: email,
        phone: state.phone,
        type: 'seller'
      });
      localStorage.setItem('user', res.data.token);
      alert(res.data.message);
      contextData.setAuth(res.data.token);
    }
    catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
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
            {email === "" && <GoogleButton
              onClick={googleClick}
            />}
            {askPhone && email !== "" &&
              <>
                <p>Please enter your phone number to continue</p>
                <div style={{ color: "black", display: "block" }}>
                  <PhoneInput
                    countryCallingCodeEditable={false}
                    country={'in'}
                    value={state.phone}
                    onChange={phone => setState({ phone })}
                  />
                </div>
                <p></p>
                <button onClick={signup}>Submit</button>
              </>
            }
            {/* {showPwdField ?
              <>
                Please set up a password for more security.
                <input type="password" name="password" placeholder="Enter your password" onChange={(e) => handle(e)} />
                <button onClick={savePassword}>Save</button>
                <button onClick={() => { window.location.href = '/welcome' }}>Skip for later</button>
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
                  <p>Already have an account?&nbsp;<a href="/login">Login Now</a> </p>
                </div>
                <div style={{ display: show ? "block" : "none" }}>
                  <input type="text" placeholder={"Enter your OTP"}
                    onChange={(e) => { setotp(e.target.value) }}></input>
                  <button onClick={ValidateOtp}>Verify</button>
                </div>
              </div>
            } */}
          </div>


        </div>
      </div>

    </>
  );
};

export default Navbar;
