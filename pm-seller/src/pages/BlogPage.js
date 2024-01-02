import React from "react";
// import Navbar from '../components/NavHom'
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Button1 from "../sub-components/Button1";
// import Footer from '../components/Footer'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import url_json from "../url.json";

// const url = url_json.url;

const BlogPage = () => {
  // const [cookies, setCookies] = useState('');
  // const [log, setLog] = useState(false);

  // useEffect(() => {
  //   async function checkLogin() {
  //     await fetch(`${url}/checkLogin`, {
  //       method: "GET",
  //       credentials: "include"
  //     })
  //       .then(res => res.json())
  //       .then(res => {
  //         if (res === 0) {
  //           console.log(res);
  //           // user is logged in
  //           setLog(true);
  //         }
  //         else {
  //           setLog(false);
  //         }
  //       })
  //   };

  //   checkLogin();
  // }, []);
  return (
    <>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section2/>
      <Section3/>
      <Section2/>
      <Section3/>
      <Section2/>
      <Section3/>
      <Button1/>
    </>
  );
};

export default BlogPage;