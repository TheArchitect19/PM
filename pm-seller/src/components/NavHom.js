import { React, useState, useEffect, useContext } from "react";
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
import { useSelector } from "react-redux";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const contextData = useContext(AuthContext);
  const navigate = useNavigate();
  const products = useSelector((state) => state.orebiReducer.products);

  const openAys = () => {
    if (!contextData.auth) {
      alert("Please login to continue");
      navigate("/login?ref=ays");
    }
    else {
      navigate("/ays");
    }
  }

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

        <div className={styles.txt} onClick={openAys} style={{ cursor: 'pointer' }}>
          <img className={styles.m} src={store} alt="" />
          <div className={styles.innertxt}>
            <h5>Sell With Us</h5>
            <p>Grow Faster</p>
          </div>
        </div>

        <a href={contextData.auth ? "/profile" : "/login"}>
          <div className={styles.txt}>
            <img className={styles.m} src={losu} alt="" />
            <div className={styles.innertxt}>
              <h5>{contextData.auth ? <>Profile</> : <>Login / Signup</>}</h5>
            </div>
          </div>
        </a>

        {/* <a href="/cart">
          <div className={styles.txt}>
            <img className={styles.m} src={cart} alt="" />
            {products.length > 0 && (
              <p className="absolute top-4 right-4 bg-primeColor text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
                {products.length}
              </p>
            )}
            <div className={styles.innertxt}>
              <h5 style={{ color: 'white' }}>.</h5>
            </div>
          </div>
        </a> */}
      </div>
    </>
  );
};

export default Navbar;
