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
import { useCookies } from 'react-cookie';

// const Box = styled.div`
// background-color: #ffffff;
// width:100vw;
// height: 100vh;
// overflow:hidden;

// width:100vw;
// display:flex;
// flex-direction:column;
// justify-content:center;
// align-items:center;

// button{
//   padding:10px;
//     background:black;
//     color:white;
// }
// `

export const MySkillsPage = () => {
  const toggleLogin = React.useRef(null);
  const toggleSignup = React.useRef(null);
  const signupForm = React.useRef(null);
  const loginForm = React.useRef(null);
  const [slideUp, toggle] = React.useState(false);
  const [cookies, setCookies] = useCookies();
  const [inputPswd, setInputPswd] = useState(false);

  const [details, setDetails] = useState({
    isd: "91",
    phone: "7004690658"
  });

  async function register() {
    await fetch("http://localhost:5000/registerSeller", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res === 0) {
          alert("Account created");
          setCookies('phone', details.phone);
          setCookies('isd', details.isd);
          setCookies('login', 1);
          window.location.href = "/welcome";
        }
        else if (res === -1) {
          alert("User already exists, Please sign in");
        }
        else {
          alert("Server error");
        }
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  }

  async function login() {
    await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
    .then(res => res.json())
    .then(res => {
      console.log(res.password);
      if (res.length === 0) {
        alert("No such user exists, Please register.");
      }
      else if (res.password === undefined) {
        setInputPswd(true);
      }
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    // <Box>
    <div className="h">
      <input type="button" onClick={register} value="Register" /><br />
      <input type="button" onClick={login} value="Log In" />
      {/* {inputPswd ? <SetPassword data={details}/> : <></>} */}
    </div>
    // </Box>
  );
};
