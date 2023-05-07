import React, { useEffect, useState } from "react";
import * as Components from "./Register";
import { LogoComponent } from "../subComponents/LogoComponent";
import { SocialIcons } from "../subComponents/SocialIcons";
// import Particles from 'react-particles-js';
import { PowerButton } from "../subComponents/PowerButton";
import IMG from "../assets/Images/register.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import styled from "styled-components";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useCookies } from "react-cookie";
import { firebase, auth } from './firebase';

const Box = styled.div`
  background-color: #ffffff;
  height: 100vh;
  overflow: hidden;
  width: 100vw;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  margin-top:10%;
  align-items: center;

  p {
    position: absolute;
    top: 50px;
  }

  .h .sbt-btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .h .sbt-btn input {
    color: white;
    background-color: #4169e1;
    padding: 0.5rem 1rem;
    border: none;
    text-align: center;
    border-radius: 9px;
    margin: 2rem;
  }
`;

const ABOUT = styled.div`
  display: flex;
  margin-top: 4%;
  color: #f8b13c;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  font-weight: 700;

  background: linear-gradient(
    to right,
    hsl(0, 0%, 30%) 0,
    hsl(0, 0%, 100%) 10%,
    hsl(0, 0%, 30%) 20%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s infinite linear;

  @keyframes shine {
    0% {
      background-position: 0;
    }
    60% {
      background-position: 600px;
    }
    100% {
      background-position: 700px;
    }
  }
  @media (width<450px) {
    margin-top: 29%;
    font-weight: 700;
    font-family: "Source Sans Pro", sans-serif;

    justify-content: center;
    align-items: center;
    font-size: 3.2rem;
  }
`;

export const Signup = () => {
  const [mynumber, setnumber] = useState("");
  const [otp, setotp] = useState('');
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState('');

  const [state, setState] = useState({
    phone: ""
  });

  async function check() {
    if (state.phone.length >= 10) {
      await fetch(`https://pandrimarket.com/store/checkSeller`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(state),
      })
        .then(res => res.json())
        .then(res => {
          if (res === 0) {
            // send otp
            const number = "+" + state.phone;
            let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
            auth.signInWithPhoneNumber(number, verify).then((result) => {
              setfinal(result);
              alert("OTP Sent");
              setshow(true);
            })
              .catch((err) => {
                alert(err);
                window.location.reload()
              });
          }
          else if (res === 1) {
            alert("Phone number already registered. Please login");
          }
          else {
            alert("Sorry for the error, it will be resolved soon.");
          }
        })
    }
  }

  async function register() {
    let token = "";
    await fetch(`https://pandrimarket.com/store/regSelGen`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then(res => res.json())
      .then(res => {
        token = res.accessToken;
      })

    await fetch(`https://pandrimarket.com/store/registerSeller`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
    .then(res => res.json())
    .then(res => {
      if (res === 0) {
        alert("Registered");
        window.location.href = "/welcome";
      }
      else {
        alert("Sorry for the error, it will be resolved soon.");
      }
    })
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
    <div>
      <ABOUT>SIGN UP</ABOUT>
      <div>
        <div style={{ display: !show ? "block" : "none" }}>
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
          <br /><br />
          <button onClick={ValidateOtp}>Verify</button>
        </div>
      </div>
    </div >
  )
};