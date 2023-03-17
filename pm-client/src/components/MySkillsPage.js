import React, { useEffect, useState } from "react";
import * as Components from "./Register";
import { LogoComponent } from "../subComponents/LogoComponent";
import { SocialIcons } from "../subComponents/SocialIcons";
// import Particles from 'react-particles-js';
import { PowerButton } from "../subComponents/PowerButton";
import IMG from "../assets/Images/register.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useCookies } from 'react-cookie';

export const MySkillsPage = () => {
  const toggleLogin = React.useRef(null);
  const toggleSignup = React.useRef(null);
  const signupForm = React.useRef(null);
  const loginForm = React.useRef(null);
  const [slideUp, toggle] = React.useState(false);
  const [cookies, setCookies] = useCookies();
  const [details, setDetails] = useState({
    isd: "91",
    phone: "6202872652"
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
        } else if (res === -1) {
          alert("User already exists, Please sign in");
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
    <div className="h">
      <input type="button" onClick={register} />
    </div>
  );
};
