import React from 'react'
import Navbar from '../components/NavHom'
import Section5 from '../components/Section5'
import Footer from '../components/Footer'
import { useState,useEffect } from 'react'
import url_json from "../url.json";

const url = url_json.url;

const Story = () => {
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
      <Section5/>
      
      </>
    )
  }
  
  export default Story