import React, { useState } from "react";
import * as Components from "./Register";
import { LogoComponent } from "../subComponents/LogoComponent";
import { SocialIcons } from "../subComponents/SocialIcons";
// import Particles from 'react-particles-js';
import { PowerButton } from "../subComponents/PowerButton";
import IMG from "../assets/Images/register.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

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
            <div>Register</div>
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
                name="phone"
                onChange={(e) => handle(e)}
              />
              <Components.SignupInput2
                type="text"
                placeholder="Designation"
                name="designation"
                onChange={(e) => handle(e)}
              />
              <Popup
                trigger={<i class="fa fa-question-circle" style={{lineHeight:"4rem", color:"#d37f47"}}></i>}
                modal
                nested
              >
                {(close) => (
                  <div style={{ fontSize: "12px" }}>
                    <button
                      style={{
                        cursor: "pointer",
                        position: "absolute",
                        display: "block",
                        padding: "2px 5px",
                        lineHeight: "20px",
                        right: "-10px",
                        top: "-10px",
                        fontSize: "24px",
                        background: "#ffffff",
                        borderRadius: "18px",
                        border: "1px solid #d37f47",
                        color:"#d37f47"
                      }}
                      onClick={close}
                    >
                      &times;
                    </button>
                    <div
                      style={{
                        width: "100%",
                        borderBottom: "1px solid gray",
                        fontSize: "18px",
                        textAlign: "center",
                        padding: "5px",
                        color:"#a05726",
                        fontWeight:"bolder"
                      }}
                    >
                      {" "}
                      Company Designations Tree <br /> Pandri Market{" "}
                    </div>
                    <div style={{ width: "100%", padding: "10px 5px", color:"#9b5729" }}>
                      {" "}
                      Designations in a company, if Proprietorship, Partnership,
                      Limited Liability Partnership, Private Limited company,
                      Public limited company and all staffs that work in the
                      company. <br />
                      Proprietorship: <br />
                      Proprietor (Owner) <br /> <br />
                      Partnership: <br />
                      Partners (Owners) <br /> <br />
                      Limited Liability Partnership (LLP): <br />
                      Designated Partners (Owners) Partners (Owners) <br />{" "}
                      <br />
                      Employees: <br />
                      Managing Director (MD) Chief Executive Officer (CEO) Chief
                      Financial Officer (CFO) Chief Operating Officer (COO)
                      General Manager (GM) Manager Accountant Executive
                      Assistant Sales Executive Customer Support Executive
                      Marketing Executive <br /> <br />
                      Private Limited Company: <br />
                      Directors (Owners) Shareholders (Owners)
                    </div>
                  </div>
                )}
              </Popup>
            </div>
            <div>
              {/* <Components.SignupInput1
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
            /> */}
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
            {/* <div className="dropdown">
              <label for="cars">Company Identity :</label>
              <select id="cars" name="cars">
                <option value="proprietorship">Proprietorship</option>
                <option value="partnership">Partnership</option>
                <option value="publiccompany">Public company</option>
              </select>
            </div> */}
          </Components.SignupForm>

          <Components.SignupButton slideUp={slideUp} onClick={register}>
            Sign Up
          </Components.SignupButton>
        </Components.SignupContainer>
      </Components.Root>
    </React.Fragment>
  );
};
