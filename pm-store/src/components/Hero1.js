import { React, useState } from "react";
import home from "../assets/svg/home.png";
import ll from "../assets/svg/ll.png";
import lr from "../assets/svg/lr.png";
import styles from "./Hero.module.css";
const Navbar = () => {
  return (
    <>
    <div  style={{ backgroundImage: `url(${home})`, backgroundSize:"cover",backgroundPosition:"center center"}} className={styles.colnav}>
      <div className={styles.cardoverlay}>
      <div className={styles.tp}>      
      
      </div>

        <p className={styles.t1}>Shop At Pandri Market</p>
      
        <div className={styles.dt2}>
        <img className={styles.ll} src={ll} alt="" />
        <p className={styles.t2}>Start Selling Online and earn more</p>
        <img className={styles.lr} src={lr} alt="" />

        </div>
        <div className={styles.login}>
               <h1>Login/SignUp</h1>
               <p>Please enter your phone number to continue</p>
               <input type="text" name="name"  placeholder="Enter Your Phone Number" />
               <button>Verify Number</button>
               <p>Prefer to sign in with password instead ? <a href="/signup">Click here</a> </p>
        </div>     
                 
      </div>
    </div>
    </>
  );
};

export default Navbar;
