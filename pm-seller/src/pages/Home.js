import { React } from "react";
// import NavHom from '../components/NavHom'
// import Navbar2 from '../components/Navbar2'
// import Footer from '../components/Footer'
// import Search from '../components/Search'
// import Catalogue from '../components/Catalogue'
// import Cat from '../components/cat'
import Hero from "../components/Hero";
import Video from "../components/Video";
import Ttm from "../components/Testimonial";
// import Cg from '../components/Cg'
// import Git from '../components/Git'
import Banner from "../components/Banner";
// import Pms from '../components/Pms'
// import Carousel from '../components/Carousel'
import Carousel1 from "../components/Carousel1";
// import Budget from '../components/Budget'
import Budget1 from "../components/Budget1";
// import BBC from '../components/BBCarousel'
// import BBC1 from '../components/BBC1'
import SWU from "../components/SellWithUs";
// import { useCookies, CookiesProvider } from 'react-cookie';
// import url_json from "../url.json";
// import HeaderBottom from "../components/home/Header/HeaderBottom";

// const url = url_json.url;

const Home = () => {
  // const [cookies] = useCookies(['login']);
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
      {/* <NavHom data={log} /> */}
      {/* <Navbar2 /> */}
      {/* <Search /> */}
      {/* <HeaderBottom /> */}
      <Carousel1 />
      <Hero />
      {/* <BBC1 /> */}
      {/* <Carousel /> */}
      <Video />
      <Budget1 />
      {/* <Budget />
        <BBC /> */}
      <Banner/>
      {/* <Pms /> */}
      {/* <Cat /> */}
      <Ttm />
      {/* <Cg /> */}
      <SWU />
      {/* <Footer /> */}
    </>
  );
};

export default Home;