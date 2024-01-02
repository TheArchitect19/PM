import React from "react";
import styles from "./Section7.module.css";
// import heroImg from "../assets/svg/hero.png";
import abt from "../assets/svg/abt.png";
// import i5 from "../assets/svg/i5.png";
// import li from "../assets/svg/li.png";
import ib from "../assets/svg/ib.png";
// import me from "../assets/svg/me.png";
import comm from "../assets/svg/comm.png";
import comm1 from "../assets/svg/comm1.png";
import sc from "../assets/svg/sc.png";

const Section5 = () => {
  return (
    <>
      <div className={styles.section4Container}>
        <div>
          <img className={styles.abt} src={abt} alt="" />
        </div>
        
        <div>
          <a href="/story">Story</a>
          <a href="/vision">Vision</a>
          <a href="/impact">Impact</a>
          <a href="/community" style={{color:"#ffffff",
            textShadow:"1.5px 1.5px 2px rgb(39, 39, 39)"}}>Community</a>
        </div>
        <div>
          <img className={styles.clo} src={comm} alt="" />
        </div>
      </div>
      <div className={styles.s7d1}></div>
      <div className={styles.ourCommunity}>
        <p>Our Community</p>
        <div></div>
        <div>
          <img src={comm1} alt="" />
        </div>  

      </div>
      <div className={styles.section4Container5}>
        <div>
          <img className={styles.ib} src={ib} alt="" />
          {/* <div className={styles.col}></div> */}
        </div>
        <div className={styles.txt}>
          <p>MEMBERSHIP</p>
          <p>GROW YOUR BUSINES WITH US</p>
          <p>
            CHECKOUT OUT OUR <a href="/">New Plans</a>
          </p>
          <button className={styles.btn}>PICK A PLAN</button>
        </div>
        <div>
          <img className={styles.sc} src={sc} alt="" />
        </div>
      </div>
    </>
  );
};

export default Section5;
