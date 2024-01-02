import React from "react";
import styles from "./Section3.module.css";
import photo1 from "../assets/img/pm-photo-1.png";

const Section3 = () => {
  return (
    <>
      <div className={styles.section3Container}>
        <div className={styles.section3Wrapper}>
          <div className={styles.section3Details}>
            <div className={styles.section3Heading}>THE POWER OF CURIOSITY IN CUSTOMER RESEARCH</div>
            <p>
            Curiosity is a powerful motivator for customers to stay informed about the latest fashion trends, offers, and promotions. Jigyasa by Pandri Market is a good digital marketing news page in the online portal to float the Wholesale or Retailers offers in real time. It is a must to have the presence of all shopkeepers..... <a href="/"> Read more</a>
            </p>
            <div className={styles.section3Person}>
              <img
                src="https://static.wikia.nocookie.net/5dc18413-2f92-4808-8259-992a6307998a/scale-to-width/755"
                alt=""
              />
              <p>
                By Rahul Agrawal <br /> 28 March, 2023
              </p>
            </div>
          </div>
          <div className={styles.section3Img}>
            <img src={photo1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
