import { React, useState } from "react";
import near from "../assets/svg/near.png";
import shop from "../assets/svg/shop.png";
import drop from "../assets/svg/drop.png";
import loc from "../assets/svg/loc.png";
import search from "../assets/svg/Search.png";
import styles from "./Search.module.css"
const Navbar = () => {
  return (
    <>
      <div className={styles.colnav}>
        <h1>Search across 300+ Shops </h1>
        <div className={styles.main}>
          <div className={styles.inloc}>
            <input
              type="text"
              name="name"
              placeholder="Search by shop, location or neighbourhood"
            />
            <img className={styles.near} src={near} alt="" />
          </div>
          <div style={{display:"flex", justifyContent:"space-evenly"}}>
          <div className={styles.shop}>
            <img className={styles.spim} src={shop} alt="" />
            Shops
            <img className={styles.drop} src={drop} alt="" />
          </div>
          <div className={styles.shop2}>
            <img className={styles.spim} src={loc} alt="" />
            Location
            <img className={styles.drop} src={drop} alt="" />
          </div>
            <button className={styles.btn}>
              <img className={styles.sb} src={search} alt="" />
              Search
            </button>
          </div>

        </div>
      </div>
    
    </>
  );
};

export default Navbar;
