import { React, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import pmnavlogo from "../assets/svg/pm.png";
import m from "../assets/svg/m.png";
import gyb from "../assets/svg/gyb.png";
import losu from "../assets/svg/losu.png";
import store from "../assets/svg/store.png";
import cart from "../assets/svg/cart.png";
import styles from "./Navbar.module.css"
import { colors } from "@mui/material";
import url from '../url.json';

const seller = url.seller;

const Navbar = (data) => {
  const [log, setLog] = useState(false);

  useEffect(() => {
    setLog(data.data);
  })
  return (
    <>
      <div className={styles.navsty}>

        <a href="/">
          <img className={styles.pm} src={pmnavlogo} alt="" />
        </a>
        <a href="/">
          <div className={styles.txt}>
            <img className={styles.m} src={m} alt="" />
            <div className={styles.innertxt}>
              <h5>Become a PM Member</h5>
              <p>Get 7-days free trial</p>
            </div>
          </div>

        </a>
        <a href="/">
          <div className={styles.txt}>
            <img className={styles.m} src={gyb} alt="" />
            <div className={styles.innertxt}>
              <h5>Grow Your Business</h5>
              <p>Join our platform</p>
            </div>
          </div>

        </a>


        <Link to={`${seller}/ays`} target="_blank" rel="noopener noreferrer">
          <div className={styles.txt}>
            <img className={styles.m} src={store} alt="" />
            <div className={styles.innertxt}>
              <h5>Sell With Us</h5>
              <p>Grow Faster</p>
            </div>
          </div>

        </Link>


        <a href={log ? "/profile" : "/login"}>
          <div className={styles.txt}>
            <img className={styles.m} src={losu} alt="" />
            <div className={styles.innertxt}>
              <h5>{log ? <>Profile</> : <>Login / Signup</>}</h5>
            </div>
          </div>

        </a>

        <a href="/cart">
          <div className={styles.txt}>
            <img className={styles.m} src={cart} alt="" />
            <div className={styles.innertxt}>
              <h5 style={{ color: 'white' }}>.</h5>
            </div>
          </div>

        </a>

      </div>



    </>
  );
};

export default Navbar;
