import React from "react";
import styles from "./BBCW.module.css";
const BBCarousel = () => {
  return (
    <div className={styles.maindiv}>
      <div className={styles.smadiv1M}>
        <div className={styles.innerdiv}>
          <h5>UNDER RS. 899</h5>
          <h6>Casual Wear</h6>
        </div> 
      </div>
      <div className={styles.smadiv2M}>
        <div className={styles.innerdiv}>
          <h5>UNDER RS. 999</h5>
          <h6>Watches</h6>
        </div> 
      </div>
      <div className={styles.smadiv3M}>
        <div className={styles.innerdiv}>
          <h5>UNDER RS. 699</h5>
          <h6>Sports Shoes</h6>
        </div> 
      </div>
      <div className={styles.smadiv4M}>
        <div className={styles.innerdiv}>
          <h5>UNDER RS. 899</h5>
          <h6>Formal Wear</h6>
        </div> 
      </div>
      <div className={styles.smadiv5M}>
        <div className={styles.innerdiv}>
          <h5>UNDER RS. 799</h5>
          <h6>Casual Wear</h6>
        </div> 
      </div>
      <div className={styles.smadiv6M}>
        <div className={styles.innerdiv}>
          <h5>UNDER RS. 599</h5>
          <h6>T Shirts</h6>
        </div> 
      </div>
    </div>
  );
};

export default BBCarousel;