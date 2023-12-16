import { React, useEffect, useState } from 'react'
import NavHom from '../components/NavHom'
import Footer from '../components/Footer'
import Hero3 from '../components/Hero3'
import url_json from "../url.json";

const url = url_json.url;


const Home = () => {
  const [log, setLog] = useState(true);

  useEffect(() => {
    async function checkLogin() {
      await fetch(`${url}/checkLogin`, {
        method: "GET",
        credentials: "include"
      })
        .then(res => res.json())
        .then(res => {
          if (res !== 0) {
            // user is not logged in
            setLog(false);
            alert("Please login to continue");
            window.location.href = "/login?redirect=ays";
          }
        })
    }
    checkLogin();
  }, []);
  return (
    <>
      <Hero3 />
    </>
  )
}

export default Home