import React from "react";
import styles from "./Section4.module.css";
import heroImg from "../assets/svg/hero.png";
import abt from "../assets/svg/abt.png";
import clo from "../assets/svg/clo.png";
import i1 from "../assets/svg/i1.png";
import i2 from "../assets/svg/i2.png";
import i3 from "../assets/svg/i3.png";
import i4 from "../assets/svg/i4.png";
import ib from "../assets/svg/ib.png";
import pms from "../assets/svg/pms.png";
import pmi from "../assets/svg/pmi.png";
import pmc from "../assets/svg/pmc.png";
import pmv from "../assets/svg/pmv.png";
import sc from "../assets/svg/sc.png";

const Section4 = () => {
  return (
    <>
      <div className={styles.section4Container}>
        <div>
        <img className={styles.abt} src={abt} />
        </div>
        
        <div>
          <a href="/story">Story</a>
          <a href="/vision">Vision</a>
          <a href="/impact">Impact</a>
          <a href="/community">Community</a>
        </div>
        <img className={styles.clo} src={clo} />
      </div>
      <div className={styles.section4Container2}>
        <p>
          This is a hyper-local online platform, allowing consumers and local
          merchants to connect and interact. Their main aim is to help small and
          medium businesses (SMBs) retailers, wholesalers, boutique owners,
          designers, artisans, local tribals of Chhattisgarh as well as young
          entrepreneurs by providing them with a digital platform to sell their
          products and have a constant source of income irrespective of the
          market situation and future pandemics. 
        </p>
      </div>
      <div className={styles.section4Container3}>
        <p>
          Pandri Market Private Limited Is Co-Founded In 2021 And Established By
          Jaya Agrawal & Rahul Kumar Agrawal.
        </p>

        <p>Here’s how it all started:</p>
      </div>

      <div className={styles.section4Container4}>
        <div className={styles.topline}></div>
        <div className={styles.s4c4child}>
          <div className={styles.s4c4left}>
            <div className={styles.l1}>
              <div><img className={styles.fimage} src={pms} alt="" /></div>
              
              <p>
                Pandri Market Private Limited is an online fragment of the
                already existing came into existence in 2021 and was established
                by founding members Jaya Agrawal & Rahul Kumar Agrawal to
                revolutionize the dynamics of selling and buying in local
                markets. <br />
                The Pandri Cloth Market - Chhattisgarh's largest textile market
                and Raipur's biggest shopping hub underwent a complete shutdown
                due to the onset of the pandemic. Shopkeepers and businessmen
                who relied.... <a href="">Read More</a>
              </p>
              <div>
                <img className={styles.iimage} src={i2} alt="" />
              </div>
            </div>
            <div className={styles.l1}>
              <div><img className={styles.fimage} src={pmv} alt="" /></div>
              
              <p>
                To bring about a digital revolution in the local market of
                Raipur which helps the sellers penetrate their sales and revenue
                generation channels into the online mode and maintain business
                continuity despite the unforeseen circumstances that may arise
                in the future and hamper their functionality. We aim to offer
                the customers a hassle-free and seamless shopping experience by
                bringing the entire Pandri Market at the click of their
                fingers..... <a href="">Read more</a>
              </p>
              <div>
                <img className={styles.iimage} src={i4} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.s4c4right}>
            <div className={styles.l1} style={{ border: "none" }}>
              <div>
                <img className={styles.iimage} src={i1} alt="" />
              </div>
            </div>
            <div className={styles.l1}>
              <div><img className={styles.fimage} src={pmi} alt="" /></div>
              
              <p>
                The rise of e-commerce and online retail has been a threat to
                local stores. Our hyperlocal e-commerce store intends to provide
                them with an opportunity to optimize their sales. <br />
                Pandri Market aims to provide a digital platform to such sellers
                so they can reach a wider customer base via a single portal.
                Along with this, we also aim to solve the problems of the
                customers pertaining to time constraints and the inability to
                visit all shops at once by bringing such a vast market, covering
                approximately 20 acres of land at the click of the customer's
                thumb..... <a href="">Read more</a>
              </p>
              <div>
                <img className={styles.iimage} src={i3} alt="" />
              </div>
            </div>
            <div className={styles.l1}>
              <div><img className={styles.fimage} src={pmc} alt="" /></div>
              
              <p>
                Mr. Rahul Kumar Agarwal, a marketing and strategy enthusiast,
                hails from the city of Raipur, Chhattisgarh. He is the Founder
                of Pandri Market and the brain behind this entire concept which
                aims to bring the very renowned 40-year-old Pandri Cloth Market
                online.  <br />
                Mrs. Jaya Agarwal is a passionate teacher and skill development
                coach from Raipur, Chhattisgarh. She is the Co-founder of Pandri
                Market and holds a knack for business and entrepreneurship..... {" "}
                <a href="">Read more</a>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.topline}></div>
      </div>

      <div className={styles.section4Container5}>
        <div>
          <img className={styles.ib} src={ib} />
      {/* <div className={styles.col}></div> */}
        </div>
        <div className={styles.txt}>
          <p>MEMBERSHIP</p>
          <p>GROW YOUR BUSINESS WITH US</p>
          <p>
            CHECKOUT OUT OUR <a>New Plans</a>
          </p>
          <button className={styles.btn}>PICK A PLAN</button>
        </div>
        <div>
          <img className={styles.sc} src={sc} />
        </div>
      </div>
    </>
  );
};

export default Section4;
