import React from "react";
import styles from "./Banner.module.css";
import pm from "../assets/svg/pm.png";
import bannerm from "../assets/svg/bannerm.png";
// import Bi from "../assets/svg/bi.png";
import store from "../assets/svg/store.png";
import play from "../assets/play.png";

const Banner2 = () => {
  return (
    <div className={styles.maindiv}>
      <div className={styles.div1} >
        <img src={pm} alt='pm' />
        <h2 style={{ fontWeight: "700" }}>MEGA <br></br> SALE</h2>
      </div>
      <div className={styles.div2} style={{ width: "30%" }}>
        <img src={bannerm} alt='bannerm' />
      </div>
      <div className={styles.div3} style={{ width: "50%" }}>
        <h1 style={{ fontWeight: "700" }}>UPTO 50% OFF</h1>
        <h4>FREE SHIPPING & MORE KNOCKOUT OFFERS!!</h4>
        <div className={styles.div31}>
          <img src={store} style={{ width: "20px" }} alt='store' />
          <h5 style={{ marginTop: "6px", marginLeft: "5px" }}>FAISHON HOUSE</h5>
        </div>
        <div className={styles.div32}>
          <h5 style={{ marginTop: "6px", marginRight: "25px" }}>Download PM App </h5>
          <img src={play} alt='play-store' />
        </div>

      </div>
    </div>
  );
};

export default Banner2;