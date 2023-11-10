import React from 'react'
import Navbar from '../components/NavHom'
import Section8 from '../components/Section8'
import Footer from '../components/Footer'
import Button1 from '../sub-components/Button1'
import { useEffect } from 'react'
import { useState } from 'react'
import url_json from "../url.json";

const url = url_json.url;
const BlogPage2 = () => {
  const [cookies, setCookies] = useState('');
  const [log, setLog] = useState(false);

  useEffect(() => {
    async function checkLogin() {
      await fetch(`${url}/checkLogin`, {
        method: "GET",
        credentials: "include"
      })
        .then(res => res.json())
        .then(res => {
          if (res === 0) {
            console.log(res);
            // user is logged in
            setLog(true);
          }
          else {
            setLog(false);
          }
        })
    };

    checkLogin();
  }, []);
    return (
      <>
      <Navbar data={log}/>
      <Section8/>
      <Button1/>
      <Footer/>
      </>
    )
  }
  
  export default BlogPage2