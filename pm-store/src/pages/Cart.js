import { React, useState, useEffect } from "react";
import NavHom from '../components/NavHom'
import Footer from '../components/Footer'
// import { useCookies, CookiesProvider } from 'react-cookie';
import url_json from "../url.json";
import Cart from "../components/Cart";

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
        <Cart />
        <Footer />
      </>
  )
}

export default Home