import React from "react";
import styles from "./Section2.module.css";
import photo1 from "../assets/img/pm-photo-1.png";

const Section2 = () => {
  return (
    <>
      <div className={styles.section2Container}>
        <div className={styles.Section2Wrapper}>
          <div className={styles.section2Img}>
            <img src={photo1} alt="" />
          </div>
          <div className={styles.section2Details}>
            <div className={styles.section2Heading}>PANDRI MARKET CUSTOMER RESEARCH STUDY</div>
            <p>
              Pandri market in Raipur is known for its vibrant fashion and
              retail scene. It's the go-to destination for fashion enthusiasts
              looking for the latest trends and styles. However, with the rise
              of e-commerce platforms reduced go-to-market and social media
              influencers focused on..... <a href="#"> Read more</a>
            </p>
            <div className={styles.section2Person}>
              <img
                src="https://static.wikia.nocookie.net/5dc18413-2f92-4808-8259-992a6307998a/scale-to-width/755"
                alt=""
              />
              <p>
                By Rahul Agrawal <br /> 28 March, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
