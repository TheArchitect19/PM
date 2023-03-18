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
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css' 
import Button from '@mui/material/Button';  

const Box = styled.div`
background-color: #ffffff;
height: 100vh;
overflow:hidden;
width:100vw;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;


.h .sbt-btn{
  display:flex;
  justify-content:center;
align-items:center;
}

.h .sbt-btn input{
  color:white;
  background-color:#4169e1;
  padding:0.5rem 1rem;
  border:none;
  text-align:center;
  border-radius:9px;
  margin:2rem;
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

  const [state, setState] = useState({
    phone: ""
  });

  return (
    <Box>
    <div className="h">
        <PhoneInput
          country={'us'}
          value={state.phone}
          onChange={phone => setState({ phone })}
        />
        <div className="sbt-btn">
        <input type="button" value="Confirm" onClick={register} />
        </div>
    </div>
    </Box>
  );
};
