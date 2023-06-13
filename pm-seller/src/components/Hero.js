import { React, useState } from "react";
import home from "../assets/svg/home.png";
import ll from "../assets/svg/ll.png";
import lr from "../assets/svg/lr.png";
import vl from "../assets/svg/vl.png";
import styles from "./Hero.module.css"
const Navbar = () => {
  return (
    <>
    <div  style={{ backgroundImage: `url(${home})`, backgroundSize:"cover",backgroundPosition:"center center"}} className={styles.colnav}>
      <div className={styles.cardoverlay}>
      <div className={styles.tp}>      
      <div className={styles.top}>
         App Exclusive Offer
      </div>
      </div>

        <p className={styles.t1}>Shop At Pandri Market</p>
      
        <div className={styles.dt2}>
        <img className={styles.ll} src={ll} alt="" />
        <p className={styles.t2}>Your local market now online</p>
        <img className={styles.lr} src={lr} alt="" />

        </div>
        <p className={styles.t3}>Start Selling Online And earn more</p>
        <div className={styles.dt3}>
        <p className={styles.t2}>BUILD YOUR STORE WITH US </p>
            
        </div>
        <div className={styles.dt4}>
            <div>
               <p className={styles.ts}>Starting at</p>
               <p className={styles.t9}>Rs.199</p>
               
            </div>
            <img className={styles.vl} src={vl} alt="" />
            <div>
            <p className={styles.tg}>Get Started</p>
            <p className={styles.tl}>with 7-days</p>
            <p className={styles.tl}>free trial</p>
               
            </div>
        </div>
        <button className={styles.btn}>PICK A PLAN</button>
      </div>
    </div>
    </>
  );
};

export default Navbar;
