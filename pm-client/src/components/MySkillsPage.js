import React from "react";
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


 

  return (

    <React.Fragment>
    
      <Components.GlobalStyle />
      <PowerButton />
      
      <LogoComponent />
      <SocialIcons  />
      <img src={IMG} />
      <Components.Root>
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
              placeholder="Name"
              name="name"
            
            />
            <Components.SignupInput
              type="email"
              placeholder="Email"
              name="email"
             
            />
            <Components.SignupInput
              type="password"
              placeholder="Password"
              name="password"
             
            />
                        <Components.SignupInput
              type="text"
              placeholder="GST registration details"
              name="gstregistration"
            />
            <Components.SignupInput
              type="number"
              placeholder="Pan Card details"
              name="pancard"
            />
            <Components.SignupInput
              type="number"
              placeholder="Contact Number"
              name="contactnumber"
            />
            <Components.SignupInput
              type="text"
              placeholder="Business Category"
              name="businesscategory"
            />
          </Components.SignupForm>
          
          <Components.SignupButton
            slideUp={slideUp}
          >
            Sign Up
          </Components.SignupButton>
        </Components.SignupContainer>
        
      </Components.Root>
    </React.Fragment>
  );
};


