import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    position: relative;
   min-height: 100vh;
   min-width:100vw;
   background-color: #131416;
   display: flex;
   align-items: center;
   justify-content: center;
   font-family: "Fira Sans", Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
  }
`;

export const Root = styled.div`
  background-color: #FFE7D7;
  border-radius: 15px;
  height: 80vh;
  width: 70vh;
  margin:1rem;
  position: relative;
  overflow: hidden;

  @media(width<600px){
    width: 90vw;
    height: 80vh;
  }

  &::after {
    content: "";
    opacity: 0.8;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: cover;
    background-image: url("https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVzc2luZXNzJTIwZGVhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");
  }
`;

export const SignupContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  z-index: 5;
  transition: all 0.3s ease;
  ${props =>
    props.slideUp === true
      ? `top: 5%;
   -webkit-transform: translate(-50%, 0%);
   -webkit-transition: all 0.3s ease;`
      : null}
`;

export const SignupForm = styled.div`
  border-radius: 15px;
  background-color: #fff;
  overflow: hidden;
  margin-top: 50px;
  opacity: 1;
  visibility: visible;
  transition: all 0.3s ease;

  ${props =>
    props.slideUp === true
      ? `
    opacity: 0;
    visibility: hidden;
  `
      : null}
`;

export const SignupButton = styled.button`
  background-color: rgba(0, 0, 0, 0.4);
  color: rgba(256, 256, 256, 0.7);
  border: 0;
  border-radius: 15px;
  display: block;
  margin: 15px auto;
  padding: 15px 45px;
  width: 100%;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: all 0.3s ease;

  &:hover {
    transition: all 0.3s ease;
    background-color: rgba(0, 0, 0, 0.8);
  }

  ${props =>
    props.slideUp === true
      ? `
    opacity: 0;
    visibility: hidden;
    `
      : null}
`;

export const SignupFormTitle = styled.h2`
  color: #fff;
  font-size: 1.7em;
  text-align: center;
  ${props =>
    props.slideUp === true
      ? `
    font-size: 1em;
    cursor: pointer;
  `
      : null}
`;

export const SignupInput = styled.input`
  border: 0;
  outline: none;
  box-shadow: none;
  display: block;
  height: 30px;
  line-height: 30px;
  padding: 8px 15px;
  border-bottom: 1px solid #eee;
  width: 100%;
  font-size: 12px;

  &:last-child {
    border-bottom: 0;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

// ===================================================== //
export const LoginContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 5;
  transition: all 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: -20px;
    transform: translate(-50%, 0);
    background-color: #fff;
    width: 200%;
    height: 250px;
    border-radius: 50%;
    z-index: 4;
    transition: all 0.3s ease;
  }

  ${props =>
    props.slideUp === false
      ? `top: 90%;
   -webkit-transition: all 0.3s ease;`
      : null}
`;

export const CenterWrapper = styled.div`
  position: absolute;
  top: calc(50% - 10%);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 65%;
  z-index: 5;
  transition: all 0.3s ease;

  ${props =>
    props.slideUp === false
      ? `top: 10%;
   transform: translate(-50%, 0%);
   transition: all 0.3s ease;`
      : null}
`;

export const LoginTitle = styled.h2`
  color: #000;
  font-size: 1.7em;
  text-align: center;

  ${props =>
    props.slideUp === false
      ? `font-size: 1em;
   margin: 0;
   padding: 0;
   cursor: pointer;
   transition: all 0.3s ease;`
      : null}
`;

export const LoginFormContainer = styled.div`
  border-radius: 15px;
  background-color: #fff;
  border: 1px solid #eee;
  overflow: hidden;
  margin-top: 50px;
  opacity: 1;
  visibility: visible;
  transition: all 0.3s ease;

  ${props =>
    props.slideUp === false
      ? `opacity: 0;
   visibility: hidden;
   transition: all 0.3s ease;`
      : null}
`;

export const LoginInput = styled.input`
  border: 0;
  outline: none;
  box-shadow: none;
  display: block;
  height: 30px;
  line-height: 30px;
  padding: 8px 15px;
  border-bottom: 1px solid #eee;
  width: 100%;
  font-size: 12px;
  &:last-child {
    border-bottom: 0;
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

export const LoginButton = styled.button`
  background-color: #6b92a4;
  color: rgba(256, 256, 256, 0.7);
  border: 0;
  border-radius: 15px;
  display: block;
  margin: 15px auto;
  padding: 15px 45px;
  width: 100%;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: all 0.3s ease;
  &:hover {
    transition: all 0.3s ease;
    background-color: rgba(0, 0, 0, 0.8);
  }

  ${props =>
    props.slideUp === false
      ? `opacity: 0;
   visibility: hidden;
   transition: all 0.3s ease;`
      : null}
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
