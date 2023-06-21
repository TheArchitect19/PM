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
import Carousel1 from '../components/Carousel1'
import Budget from '../components/Budget'
import BBC from '../components/BBCarousel'
import { useCookies, CookiesProvider } from 'react-cookie';
import url_json from "../url.json";

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
    <CookiesProvider>
      <>
        <NavHom data={log} />
        <Navbar2 />
        <Search />
        <Catalogue />
        <Carousel1 />
        <Hero />
        <Budget />
        <BBC />
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