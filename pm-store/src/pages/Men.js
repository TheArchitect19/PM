import { React, useState, useEffect } from "react";
import NavHom from '../components/NavHom'
import Footer from '../components/Footer'
import Carousel1M from '../components/Carousel1M'
import BudgetM from '../components/BudgetM'
import Budget1M from '../components/Budget1M'
import Budget3M from '../components/Budget3M'
import Budget4M from '../components/Budget4M'
import BBCarouselM from '../components/BBCarouselM'
import BBC3M from '../components/BBC3M'
import BBC1M from '../components/BBC1M'
import BBC2 from '../components/BBC2'
import HeroW from '../components/HeroW.js'
// import { useCookies, CookiesProvider } from 'react-cookie';
import url_json from "../url.json";
import Banner from "../components/Banner";
import Banner2 from "../components/Banner2";

const url = url_json.url;

const Men = () => {
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
        <Banner2/>
        <Carousel1M />
        <Budget1M />
        <BBC3M />
        <BudgetM />
        <BBCarouselM />
        <Budget3M />
        <BBC2 />
        <Budget4M />
        <BBC1M />
        <Footer />
      </>
  )
}

export default Men