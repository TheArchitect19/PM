import { React } from "react";
import { Link } from "react-router-dom";
import cg from "../assets/svg/cg.png";
import styles from "./Cg.module.css";
const Navbar = () => {
  return (
    <>
      <div className={styles.colnav}>
        <img className={styles.cg} src={cg} alt="" />
        <div className={styles.it}>
          <h3>Now shop your favourite products Online at Pandri Market</h3>
          <h5>300+ Shops</h5>
          <div className={styles.tg}>
            <ul>
              <Link to="/muklava">
                <li>Muklava (Open)</li>
              </Link>
            </ul>
          </div>
          <div className={styles.tg}>
            <ul>
              <h5> Opening Soon - </h5>
              <li>Fashion House</li>
              <li>Manyavar&Mohey</li>
              <li>Payal Collection</li>
            </ul>
            <ul>
              <div className={styles.tg1}>
                <li>Parag Fashion</li>
                <li>HariOm Garments</li>
                <li>Tulsi </li>
              </div>
            </ul>
          </div>
        </div>

      </div>

    </>
  );
};

export default Navbar;
