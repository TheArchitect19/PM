import React from "react";
import * as Components from "./Register";
import { LogoComponent } from '../subComponents/LogoComponent'
import { SocialIcons } from '../subComponents/SocialIcons'
// import Particles from 'react-particles-js';
import { PowerButton } from '../subComponents/PowerButton'

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
      <Components.Root>
        <Components.SignupContainer signUp ref={signupForm} slideUp={slideUp}>
          <Components.SignupFormTitle
            ref={toggleSignup}
            onClick={() => {
              toggle(false);
            }}
            slideUp={slideUp}
          >
            Sign Up
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
          </Components.SignupForm>
          <Components.SignupButton
            slideUp={slideUp}
          >
            Sign Up
          </Components.SignupButton>
        </Components.SignupContainer>
        <Components.LoginContainer ref={loginForm} slideUp={slideUp}>
          <Components.CenterWrapper slideUp={slideUp}>
            <Components.LoginTitle
              ref={toggleLogin}
              slideUp={slideUp}
              onClick={() => {
                toggle(true);
              }}
            >
              Login
            </Components.LoginTitle>
            <Components.LoginFormContainer slideUp={slideUp}>
              <Components.LoginInput
                type="email"
                placeholder="Email"
                name="email"
                
              />
              <Components.LoginInput
                type="password"
                placeholder="Password"
                name="password"
                
              />
            </Components.LoginFormContainer>
            <Components.LoginButton
              slideUp={slideUp}
            >
              Login
            </Components.LoginButton>
          </Components.CenterWrapper>
        </Components.LoginContainer>
      </Components.Root>
    </React.Fragment>
  );
};


