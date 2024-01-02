import { React } from "react";
// import near from "../assets/svg/near.png";
// import shop from "../assets/svg/shop.png";
// import drop from "../assets/svg/drop.png";
import il from "../assets/svg/il.png";
import ir from "../assets/svg/ir.png";
// import search from "../assets/svg/Search.png";
import styles from "./cat.module.css";
const Navbar = () => {
  return (
    <>
      <div className={styles.outcol}>
        <img className={styles.ll} src={il} alt="" />
        <div className={styles.colnav}>
          <h3>Get Access To Exclusive Deals </h3>
          <h5>Only the best deals reach your inbox </h5>
          <div className={styles.main}>
            <div className={styles.inloc}>
              <input type="text" name="name" placeholder="e.g.  mary@gmail.com"/>

            </div>
    
            <div className={styles.search}>
              <button className={styles.btn}>
      Notify Me
              </button>
            </div>
          </div>
        </div>
        <img className={styles.ll} src={ir} alt="" />

      </div>
    
    </>
  );
};

export default Navbar;
