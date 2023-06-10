import { React, useEffect, useState } from 'react'
import NavHom from '../components/NavHom'
import Footer from '../components/Footer'
import Hero3 from '../components/Hero3'

const url = "http://localhost:5000";
// const url = "https://backend.pandrimarket.com"


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
            window.location.href = "/login";
          }
        })
    }
    checkLogin();
  });
  return (
    <>
      <NavHom data={log} />
      <Hero3 />
      <Footer />
    </>
  )
}

export default Home