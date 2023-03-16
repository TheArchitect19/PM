import React, { useState } from "react";
import * as Components from "./PhysicalShopRegCSS";
import { LogoComponent } from "../subComponents/LogoComponent";
import { SocialIcons } from "../subComponents/SocialIcons";
// import Particles from 'react-particles-js';
import { PowerButton } from "../subComponents/PowerButton";
import IMG from "../assets/Images/register.png";

export const PhysicalShopReg = () => {
  const toggleLogin = React.useRef(null);
  const togglePhysicalReg = React.useRef(null);
  const PhysicalRegForm = React.useRef(null);
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
      <Components.GlobalStyle2 />
      <PowerButton />
      <LogoComponent />
      {/* <SocialIcons /> */}
      <Components.Root2>
        {/* <img src={IMG} /> */}
        <Components.PhysicalRegContainer
          PhysicalReg
          ref={PhysicalRegForm}
          slideUp={slideUp}
        >
          <Components.PhysicalRegFormTitle
            ref={togglePhysicalReg}
            onClick={() => {
              toggle(false);
            }}
            slideUp={slideUp}
          >
            <div>Physical Shop Registration</div>
          </Components.PhysicalRegFormTitle>
          <Components.PhysicalRegForm slideUp={slideUp}>
            <div className="physhopreg-left">
              <div>
                <Components.PhysicalRegInput2
                  type="text"
                  placeholder="Shop Name"
                  name="shopname"
                  onChange={(e) => handle(e)}
                />
              </div>
              <div>
                <Components.PhysicalRegInput2
                  type="text"
                  placeholder="Shop Address"
                  name="shopaddress"
                  onChange={(e) => handle(e)}
                />
              </div>

              <div>
                <Components.PhysicalRegInput1
                  type="date"
                  placeholder="Established Date"
                  name="whatsappno"
                  onChange={(e) => handle(e)}
                />
                <Components.PhysicalRegInput2
                  type="text"
                  placeholder="Designation"
                  name="designation"
                  onChange={(e) => handle(e)}
                />
              </div>
              <div>
                <Components.PhysicalRegInput1
                  type="text"
                  placeholder="GST"
                  name="gst"
                  onChange={(e) => handle(e)}
                />
                <Components.PhysicalRegInput1
                  type="text"
                  placeholder="PAN"
                  name="pan"
                  onChange={(e) => handle(e)}
                />
              </div>
              <div>
                <Components.PhysicalRegInput2
                  type="text"
                  placeholder="Address"
                  name="address"
                  onChange={(e) => handle(e)}
                />
              </div>
              <div>
                <Components.PhysicalRegInput1
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => handle(e)}
                />
                <Components.PhysicalRegInput1
                  type="password"
                  placeholder="Re-Type Password"
                  name="repassword"
                  onChange={(e) => handle(e)}
                />
              </div>
              <div className="dropdown">
                <label for="cars">Ownership Status :</label>
                <select id="cars" name="cars">
                  <option value="proprietorship">Proprietorship</option>
                  <option value="partnership">Pvt / Partnership</option>
                  <option value="publiccompany">Public company</option>
                </select>
              </div>
            </div>

            <div className="physhopreg-right">
              <div>
                <Components.PhysicalRegInput2
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  onChange={(e) => handle(e)}
                />
              </div>
              <div>
                <Components.PhysicalRegInput2
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={(e) => handle(e)}
                />
              </div>

              <div>
                <Components.PhysicalRegInput1
                  type="number"
                  placeholder="Whatsapp Number"
                  name="whatsappno"
                  onChange={(e) => handle(e)}
                />
                <Components.PhysicalRegInput2
                  type="number"
                  placeholder="Bank A/C Number"
                  name="bankacnumber"
                  onChange={(e) => handle(e)}
                />
              </div>
              <div>
                <Components.PhysicalRegInput1
                  type="text"
                  placeholder="GST"
                  name="gst"
                  onChange={(e) => handle(e)}
                />
                <Components.PhysicalRegInput1
                  type="text"
                  placeholder="Add Brands"
                  name="brands"
                  onChange={(e) => handle(e)}
                />
              </div>
              <div>
                <Components.PhysicalRegInput2
                  type="text"
                  placeholder="What do you sell?"
                  name="sell"
                  onChange={(e) => handle(e)}
                />
              </div>
              <div>

                <Components.PhysicalRegInput1
                  type="text"
                  placeholder="Add Link"
                  name="link"
                  onChange={(e) => handle(e)}
                />

                <Components.PhysicalRegInput1
                  type="text"
                  placeholder="Property ID"
                  name="propertyid"
                  onChange={(e) => handle(e)}
                />
              </div>
              <div className="dropdown">
                <label for="cars">Property Status :</label>
                <select id="cars" name="cars">
                  <option value="proprietorship">Rented</option>
                  <option value="partnership">Self Owned</option>
                </select>
              </div>
            </div>
          </Components.PhysicalRegForm>

          <Components.PhysicalRegButton slideUp={slideUp} onClick={register}>
            Sign Up
          </Components.PhysicalRegButton>
        </Components.PhysicalRegContainer>
      </Components.Root2>
    </React.Fragment>
  );
};
