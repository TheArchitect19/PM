import React from 'react'
import styles from "./Section6.module.css";
import heroImg from "../assets/svg/hero.png";
import abt from "../assets/svg/abt.png";
import i5 from "../assets/svg/i5.png";
import li from "../assets/svg/li.png";
import wo from "../assets/svg/wo.png";
import me from "../assets/svg/me.png";
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
          <a href="/vision" style={{color:"#ffffff",
  textShadow:"1.5px 1.5px 2px rgb(39, 39, 39)"}}>Vision</a>
          <a href="/impact">Impact</a>
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
            <div className={styles.section3Heading}>Our Mission</div>
            <p>
            Our mission is to help, empower and uplift the local vendors of Raipur by providing them with an online platform to earn a livelihood by not only catering to the local customers but also by selling to people globally and at the same time offering the customers a hassle-free and seamless shopping experience through our online portal. <br />
            Simultaneously, we aim to offer customers a hassle-free and seamless shopping experience by bringing the entire Pandri Market at the click of their fingers.
            </p>
          </div>
          <div className={styles.section3Img}>
            <img className={styles.img2} src={me} alt="" />
            <img className={styles.img1} src={wo} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.section3Container2}>
        <div className={styles.section3Heading2}>Our hyperlocal e-commerce store intends to provide pandri market local stores with an opportunity to optimize their sales.</div>
        <div className={styles.section3Wrapper2}>
        <div className={styles.section3Details2}>
            <p>
            Pandri Market aims to provide a digital platform for such sellers to reach a wider customer base via a single portal. Along with this, we also aim to solve the problems of the customers pertaining to time constraints and the inability to visit all shops at once by bringing such a vast market, covering approximately 20 acres of land at the click of the customer's thumb. <br />
            It is also meant to provide a direct link between buyers and wholesalers without geographical locations being an obstacle in the process and to facilitate a smooth transaction through user-friendly software.  <br />
            Moreover, young entrepreneurs who do not have the funds to rent a shop in the posh area to sell their products will benefit from this venture as their infrastructural cost will be reduced to almost half, thanks to the online setup due to which products can be stored at any place of their convenience.  <br />
            The process is very simple wherein the sellers are required to register on the portal and then they can directly showcase/list their products to buyers globally. This enables them to run their business completely virtually and automate their sales process - even while traveling.
            </p>
          </div>
          <div className={styles.section3Img2}>
            <img src={ocs} alt="" />
            {/* <img className={styles.img1} src={wo} alt="" /> */}
          </div>
        </div>
      </div>
      <div className={styles.section3Container3}>
        <div className={styles.section3Wrapper3}>
        <div className={styles.section3Details3}>
            <div className={styles.section3Heading}>Our Vission</div>
            <p>
            To bring about a digital revolution in the local market of Raipur which helps the sellers penetrate their sales and revenue generation channels into the online mode and maintain business continuity despite the unforeseen circumstances that may arise in the future and hamper their functionality.
            </p>
          </div>
        </div>
      </div>


       
    </>
  )
}

export default Section5