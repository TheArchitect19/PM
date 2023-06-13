import { React, useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import pmnavlogo from "../assets/svg/pm.png";
import m from "../assets/svg/m.png";
import gyb from "../assets/svg/gyb.png";
import losu from "../assets/svg/losu.png";
import store from "../assets/svg/store.png";
import styles from "./Navbar.module.css"

const Navbar = (data) => {
  const [log, setLog] = useState(false);
  
  useEffect(() => {
    setLog(data.data);
  })
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
          <img className={styles.pm} src={pmnavlogo} alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div className={styles.navsty}>
            <ul class="navbar-nav mr-auto">
              <li class="nav-item ">
                <a class="nav-link mx-3" href="/">
                  <div className={styles.txt}>
                    <img className={styles.m} src={m} alt="" />
                    <div className={styles.innertxt}>
                      <h5>Become a PM Member</h5>
                      <p>Get 7-days free trial</p>
                    </div>
                  </div>

                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link mx-3" href="/">
                  <div className={styles.txt}>
                    <img className={styles.m} src={gyb} alt="" />
                    <div className={styles.innertxt}>
                      <h5>Grow Your Business</h5>
                      <p>Join our platform</p>
                    </div>
                  </div>

                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link mx-3" href="/ays">
                  <div className={styles.txt}>
                    <img className={styles.m} src={store} alt="" />
                    <div className={styles.innertxt}>
                      <h5>Add Your Store</h5>
                      <p>Join our platform</p>
                    </div>
                  </div>

                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link mx-3" href={log ? "/profile" : "/login"}>
                  <div className={styles.txt}>
                    <img className={styles.m} src={losu} alt="" />
                    <div className={styles.innertxtl}>
                      <h5>{log ? <>Profile</> : <>Login / Signup</>}</h5>
                    </div>
                  </div>

                </a>
              </li>
              </ul>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
