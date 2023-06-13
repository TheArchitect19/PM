import { React, useState } from "react";
import ttm from "../assets/svg/ttm.png";
import styles from "./Testimonial.module.css"
const Navbar = () => {
  return (
    <>
    <div className={styles.colnav}>
      Testimonials
    </div>
    <div className={styles.ttm}>
       <img className={styles.tti} src={ttm} alt="" />
       <p>I've honestly, loved Pandri Market. It is always a pleasure to shop from Pandri Market. The products are so
comfortable & they are really amazing
and affordable. The black ankle length
leggings are my go to! From work to
walk.

@marygeorina —  Mary green</p>
    </div>
    </>
  );
};

export default Navbar;
