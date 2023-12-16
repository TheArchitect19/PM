import { React, useState, useEffect } from "react";
import NavHom from '../components/NavHom'
import Footer from '../components/Footer'
import Carousel1 from '../components/Carousel2'
import Budget from '../components/Budget'
import Budget1 from '../components/Budget2'
import Budget2 from '../components/Budget3'
import Budget3 from '../components/Budget4'
import BBC from '../components/BBCarouselW'
import BBC3 from '../components/BBC3'
import BBC1 from '../components/BBC1'
import BBC2 from '../components/BBC2M'
import HeroW from '../components/HeroW.js'
// import { useCookies, CookiesProvider } from 'react-cookie';
import url_json from "../url.json";
import Banner from "../components/Banner";

const url = url_json.url;

const Home = () => {
  // const [cookies] = useCookies(['login']);
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
        <NavHom data={log} />
        <Banner/>
        <Carousel1 />
        <Budget1 />
        <BBC3 />
        <Budget />
        <BBC />
        <Budget2 />
        <BBC2 />
        <Budget3 />
        <BBC1 />
        <Footer />
      </>
  )
}

export default Home