import { React, useEffect, useState } from 'react'
import NavHom from '../components/NavHom'
import Footer from '../components/Footer'
import Hero3 from '../components/Hero3'
// import url_json from "../url.json";
import axios from 'axios';

// const url = url_json.url;

const Home = () => {
  const [log, setLog] = useState(true);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await axios.post('http://localhost:8000/api/auth/check', { token: localStorage.getItem('user'), type: 'seller' });
        if (res.data.ok) {
          setLog(true);
        }
        else {
          setLog(false);
          localStorage.removeItem('user');
          window.location.href = "/signup";
        }
      }
      catch (error) {
        console.log(error);
        localStorage.removeItem('user');
        window.location.href = "/signup";
      }
    }
    checkLogin();
  }, []);

  return (
    <>
      <NavHom data={log} />
      <Hero3 />
      <Footer />
    </>
  )
}

export default Home