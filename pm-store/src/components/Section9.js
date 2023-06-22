import React from 'react'
import styles from "./Section6.module.css";
import heroImg from "../assets/svg/hero.png";
import abt from "../assets/svg/abt.png";
import i5 from "../assets/svg/home.png";
import li from "../assets/svg/li.png";
import wo from "../assets/svg/wo.png";
import me from "../assets/img/banner.jpg";
import ocs from "../assets/svg/ocs.png";



const Section5 = () => {
  
  return (
    <>
      <div className={styles.section4Container}>
        <div>
        <img className={styles.abt} src={abt} />
        </div>
        
        <div>
          <a href="/story">Story</a>
          <a href="/vision" >Vision</a>
          <a href="/impact" style={{color:"#ffffff",
  textShadow:"1.5px 1.5px 2px rgb(39, 39, 39)"}}>Impact</a>
          <a href="/community">Community</a>
        </div>
        <div>
        <img className={styles.clo} src={i5} />
        </div>
      </div>
      <div className={styles.s7d1}></div>
      <div className={styles.section3Container}>
        <div className={styles.section3Wrapper}>
        <div className={styles.section3Details}>
            <div className={styles.section3Heading}>Why this hyperlocal e-commerce store is the need of the hour for the sellers of Pandri Market and how does it cater to their problems?</div>
            <p>
            The rise of e-commerce and online retail has been a threat to local stores. Our venture supports. Our hyperlocal e-commerce store intends to provide them with an opportunity to optimize their sales.
            <br></br>
            There are numerous ways in which the sellers in the local Pandri Market can benefit through this online portal/e-commerce store solely dedicated to assisting them and being connected to their customers no matter what the situation may be.
            </p>
          </div>
          <div className={styles.sectionXImg}>
            <img className={styles.imgm} src={me} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.section3Container2}>
        <div className={styles.section3Heading2}>How can an E-commerce store for Pandri Market provide a better shopping experience for the customers?</div>
        <div className={styles.section3Wrapper2}>
        <div className={styles.section3Details2}>
            <p>
            With Raipur developing at a rapid rate, a majority of the population is now working and their jobs do not allow them to take out time to go to the overcrowded markets and spend hours searching for the item they need in 100 different shops offering similar items. In this case, having all the items from all shops in a single portal along with their prices, features, and descriptions makes their task a lot easier and time-saving. 
            <br></br>
            For businesses outside Raipur who want to purchase in bulk from the wholesalers of Pandri Market- time constraints, commuting, and transportation costs often become a deal-breaker. In this case, having access to all the information on their screen provides for a seamless transaction and solves all their problems.
            <br></br>
            For customers who are old, differently abled, and mothers with little children- it is not feasible for them to visit the marketplaces. Having access to the entire market online is especially beneficial and comfortable for them as they can shop without the fear of falling, getting pushed, kids, running amok, etc. 
            <br></br>
            Pandri Market being excessively crowded and busy often leads to rigorous traffic jams around the area and customers face issues with parking their vehicles/conveyance when they come to shop there. An online portal eliminates these frequent problems that people usually face.
            </p>
          </div>
          <div className={styles.section3Img2}>
            <img src={ocs} alt="" />
            {/* <img className={styles.img1} src={wo} alt="" /> */}
          </div>
        </div>
      </div>


       
    </>
  )
}

export default Section5