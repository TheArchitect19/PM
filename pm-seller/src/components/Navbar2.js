import { React } from "react";
import drop from "../assets/svg/drop.png";
import styles from "./Navbar2.module.css";
const Navbar = () => {
  return (
    <>
      <div className={styles.colnav}>
       
              
              
        <a   href="/">
                  PM Location 1
          <img className={styles.drop} src={drop} alt="" />
        </a>
                
                
             
            
        <a   href="/">
                  PM Location 2
          <img className={styles.drop} src={drop} alt="" />
        </a>
             
              
        <a   href="/">
                  PM Location 3
          <img className={styles.drop} src={drop} alt="" />
        </a>
            
             
        <a   href="/blogs">
                  PM Location 4
          <img className={styles.drop} src={drop} alt="" />
        </a>
            
            
        <a   href="/">
                  PM Location 5
          <img className={styles.drop} src={drop} alt="" />
        </a>
            
             
        <a   href="/">
                  PM Location 6
          <img className={styles.drop} src={drop} alt="" />
        </a>
           
              
        <a   href="/">
                  PM Location 7
          <img className={styles.drop} src={drop} alt="" />
        </a>
            
              
        <a   href="/">
                  PM Location 8
          <img className={styles.drop} src={drop} alt="" />
        </a>
            
      </div>
    </>
  );
};

export default Navbar;
