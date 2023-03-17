import React, { useState } from "react";
import * as Components from "./Register";
import { LogoComponent } from "../subComponents/LogoComponent";
import { SocialIcons } from "../subComponents/SocialIcons";
// import Particles from 'react-particles-js';
import { PowerButton } from "../subComponents/PowerButton";
import IMG from "../assets/Images/register.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

export const MySkillsPage = () => {
  const toggleLogin = React.useRef(null);
  const toggleSignup = React.useRef(null);
  const signupForm = React.useRef(null);
  const loginForm = React.useRef(null);
  const [slideUp, toggle] = React.useState(false);

  const [phone, setPhone] = useState("");
  const [isd, setIsd] = useState("");

  async function register() {
    console.log(phone);
    console.log(phone.length);

    if (phone.length !== 13) {
      alert("Please enter your 10 digit mobile number");
      return;
    }
    // await fetch("http://localhost:5000/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: phone,
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     if (res === 0) {
    //       alert("Account created");
    //     } else if (res === -1) {
    //       alert("Email already exists");
    //     } else {
    //       alert("Server error");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     return;
    //   });
  }

  function handle(e) {
    console.log(e);
  }

  return (

    <React.Fragment>
      <Components.GlobalStyle />
      <PowerButton />
      <LogoComponent />
      <SocialIcons />

        <PhoneInput
          country={""}
          enableSearch={true}
          value={phone}
          onChange={(phone) => handle(phone)}
        />

      <Components.SignupButton slideUp={slideUp} onClick={register}>
        Proceed
      </Components.SignupButton>
      {/* <Components.Root>
        <img src={IMG} />
      </Components.Root> */}
    </React.Fragment>
  );
};
