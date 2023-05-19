import { React, useState } from "react";
import m8 from "../assets/svg/m8.png";
import m1 from "../assets/svg/m1.png";
import m2 from "../assets/svg/m2.png";
import m3 from "../assets/svg/m3.png";
import m4 from "../assets/svg/m4.png";
import m5 from "../assets/svg/m5.png";
import m6 from "../assets/svg/m6.png";
import m7 from "../assets/svg/m7.png";
import styles from "./Catalogue.module.css"
const Navbar = () => {
  return (
    <>
    <div className={styles.colnav}>
      <div className={styles.mx}>
    <img className={styles.m8} src={m8} alt="" />
    <p>Leggings & Churidaar</p>
      </div>
      <div className={styles.m1}>
    <img className={styles.m8} src={m1} alt="" />
    <p>Ethnic Wear</p>
      </div>
      <div className={styles.m1}>
    <img className={styles.m8} src={m2} alt="" />
    <p>Casual Wear</p>
      </div>
      <div className={styles.m1}>
    <img className={styles.m8} src={m3} alt="" />
    <p>Lounge Wear</p>
      </div>
      <div className={styles.m1}>
    <img className={styles.m8} src={m4} alt="" />
    <p>Active Wear</p>
      </div>
      <div className={styles.m1}>
    <img className={styles.m8} src={m5} alt="" />
    <p>Formal Wear</p>
      </div>
      <div className={styles.m1}>
    <img className={styles.m8} src={m6} alt="" />
    <p>Winter Wear</p>
      </div>
      <div className={styles.m1}>
    <img className={styles.m8} src={m7} alt="" />
    <p>Jeans & Jeggings</p>
      </div>
    </div>
    
    </>
  );
};

export default Navbar;
