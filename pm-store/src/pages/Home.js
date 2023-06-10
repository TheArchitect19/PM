import { React, useState, useEffect } from "react";
import NavHom from '../components/NavHom'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'
import Search from '../components/Search'
import Catalogue from '../components/Catalogue'
import Cat from '../components/cat'
import Hero from '../components/Hero'
import Video from '../components/Video'
import Ttm from '../components/Testimonial'
import Cg from '../components/Cg'
import Git from '../components/Git'
import Pms from '../components/Pms'
import Carousel from '../components/Carousel'

import { useCookies, CookiesProvider } from 'react-cookie';

const url = "http://localhost:5000";
// const url = "https://backend.pandrimarket.com"

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
          console.log(res);
          if (res === 0) {
            // user is logged in
            setLog(true);
          }
          else {
            setLog(false);
          }
        })
    };

    checkLogin();
  }, [log.length]);

  return (
    <CookiesProvider>
      <>
        <NavHom data={log} />
        <Navbar2 />
        <Search />
        <Catalogue />
        <Hero />
        <Video />
        <Pms />
        <Carousel />
        <Cat />
        <Ttm />
        <Cg />
        <Git />
        <Footer />
      </>
    </CookiesProvider>
  )
}

export default Home