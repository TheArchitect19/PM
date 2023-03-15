import React, { useState } from "react";
import * as Components from "./Register";
import { LogoComponent } from "../subComponents/LogoComponent";
import { SocialIcons } from "../subComponents/SocialIcons";
// import Particles from 'react-particles-js';
import { PowerButton } from "../subComponents/PowerButton";
import IMG from "../assets/Images/register.png";

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
  });

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
            <div>
            Register
            </div>
            
          </Components.SignupFormTitle>
          <Components.SignupForm slideUp={slideUp}>
            <div>
            <Components.SignupInput2
              type="text"
              placeholder="Full Name"
              name="name"
              onChange={(e) => handle(e)}
            />
            </div>
            <div>
            <Components.SignupInput2
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => handle(e)}
            />
            </div>

            <div>
            <Components.SignupInput1
              type="number"
              placeholder="Whatsapp Number"
              name="whatsappno"
              onChange={(e) => handle(e)}
            />
            <Components.SignupInput2
              type="text"
              placeholder="Designation"
              name="designation"
              onChange={(e) => handle(e)}
            />

            </div>
            <div>
            <Components.SignupInput1
              type="text"
              placeholder="GST"
              name="gst"
              onChange={(e) => handle(e)}
            />
            <Components.SignupInput1
              type="text"
              placeholder="PAN"
              name="pan"
              onChange={(e) => handle(e)}
            />
            </div>
            <div>
            <Components.SignupInput2
              type="text"
              placeholder="Address"
              name="address"
              onChange={(e) => handle(e)}
            />
            </div>
            <div>
            <Components.SignupInput1
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => handle(e)}
            />
            <Components.SignupInput1
              type="password"
              placeholder="Re-Type Password"
              name="repassword"
              onChange={(e) => handle(e)}
            />
            </div>
            <div className="dropdown">
            <label for="cars">Company Identity :</label>
            <select id="cars" name="cars">
              <option value="proprietorship">Proprietorship</option>
              <option value="partnership">Partnership</option>
              <option value="publiccompany">Public company</option>
            </select>
            </div>
            
          </Components.SignupForm>

          <Components.SignupButton slideUp={slideUp} onClick={register}>
            Sign Up
          </Components.SignupButton>
        </Components.SignupContainer>
      </Components.Root>
    </React.Fragment>
  );
};
