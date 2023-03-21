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
import GoogleButton from 'react-google-button'
import { useCookies } from "react-cookie";

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

export const MySkillsPage = () => {
  const toggleLogin = React.useRef(null);
  const toggleSignup = React.useRef(null);
  const signupForm = React.useRef(null);
  const loginForm = React.useRef(null);
  const [slideUp, toggle] = React.useState(false);
  const [phone, setPhone] = useState({ data: "" });
  const [cookies, setCookies] = useCookies();

  useEffect(() => {
    function redirect() {
      if (cookies['login'] === '1') {
        window.location.href = "/welcome";
      }
    }
    redirect();
  }, []);

  async function register() {
    const num = phone.data;
    if (num.length < 10) {
      alert("Please enter your 10-digit mobile number.");
      return;
    }
    // await fetch("http://localhost:5000/auth", {
    await fetch("https://pandrimarket.com/store/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(phone),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res === 0) {
          alert("Account created");
        } else if (res === -1) {
          alert("Email already exists");
        } else {
          alert("Server error");
        }
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  }

  return (
    <>
      <ABOUT>Registration</ABOUT>
      <Box>
        <div className="h">
          {/* <PhoneInput
            country={"in"}
            value={phone.data}
            onChange={(data) => setPhone({ data })}
          /> */}
          <div className="sbt-btn">
            {/* <a href="http://localhost:5000/auth"> */}
            <a href="https://pandrimarket.com/store/auth">
              <GoogleButton />
            </a>
          </div>
        </div>
      </Box>
    </>
  );
};