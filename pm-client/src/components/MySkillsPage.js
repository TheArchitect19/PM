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

const Box = styled.div`
background-color: #ffffff;
width:100vw;
height: 100vh;
overflow:hidden;

width:100vw;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

button{
  padding:10px;
    background:black;
    color:white;
}
`

export const MySkillsPage = () => {
  const toggleLogin = React.useRef(null);
  const toggleSignup = React.useRef(null);
  const signupForm = React.useRef(null);
  const loginForm = React.useRef(null);
  const [slideUp, toggle] = React.useState(false);

  const [details, setDetails] = useState({
    isd: "91",
    phone: "6202872652"
  });

  async function register() {
    await fetch("http://localhost:5000/register", {
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

  function handle(e) {
    console.log(e);
  }

  return (
    <Box>
    <div className="h">
      <input type="button" onClick={register} />
    </div>
    </Box>
  );
};
