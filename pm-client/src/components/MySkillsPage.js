import React, { useState } from "react";
import * as Components from "./Register";
import { LogoComponent } from '../subComponents/LogoComponent'
import { SocialIcons } from '../subComponents/SocialIcons'
// import Particles from 'react-particles-js';
import { PowerButton } from '../subComponents/PowerButton'
import IMG from '../assets/Images/register.png'

export const MySkillsPage = () => {
  const toggleLogin = React.useRef(null);
  const toggleSignup = React.useRef(null);
  const signupForm = React.useRef(null);
  const loginForm = React.useRef(null);
  const [slideUp, toggle] = React.useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    repassword: "",
    seller: "0",
    buyer: "0",
    designation: "0",
  })

  function handle(e) {
    const newData = { ...form };
    newData[e.target.name] = e.target.value;
    setForm(newData);
  }

  async function register() {
    console.log(form);
    await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
    .then(res => res.json())
    .then(res => {
      if (res === 0) {
        alert("Account created");
      }
      else if (res === -1) {
        alert("Email already exists");
      }
      else {
        alert("Server error");
      }
    })
    .catch(err => {
      console.log(err);
      return;
    })
  }

  return (
    <React.Fragment>

      <Components.GlobalStyle />
      <PowerButton />

      <LogoComponent />
      <SocialIcons />
      <Components.Root>
        <img src={IMG} />
        <Components.SignupContainer signUp ref={signupForm} slideUp={slideUp}>
          <Components.SignupFormTitle
            ref={toggleSignup}
            onClick={() => {
              toggle(false);
            }}
            slideUp={slideUp}
          >
            Register
          </Components.SignupFormTitle>
          <Components.SignupForm slideUp={slideUp}>
            <Components.SignupInput
              type="text"
              placeholder="Full name"
              name="name"
              onChange={(e) => handle(e)}
            />
            <Components.SignupInput
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => handle(e)}
            />
            <Components.SignupInput
              type="number"
              placeholder="Contact Number(Whatsapp)"
              name="phone"
              onChange={(e) => handle(e)}
            />
            <Components.SignupInput
              type="text"
              placeholder="Address"
              name="address"
              onChange={(e) => handle(e)}
            />
            <Components.SignupInput
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => handle(e)}
            />
            <Components.SignupInput
              type="password"
              placeholder="Re-type password"
              name="repassword"
              onChange={(e) => handle(e)}
            />
          </Components.SignupForm>

          <Components.SignupButton
            slideUp={slideUp}
            onClick={register}
          >
            Sign Up
          </Components.SignupButton>
        </Components.SignupContainer>

      </Components.Root>
    </React.Fragment>
  );
};


