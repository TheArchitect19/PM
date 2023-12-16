import React from "react";
import Slider from "react-slick";
import styles from './HeroM.module.css'
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows: false
  };
  return (
    <Slider {...settings}>
      <div className={styles.div1}>
        <div className={styles.innerdiv}>
        <h1>UPTO 50% OFF</h1>
        <h2>Get Access To Exclusive Deals</h2>
        <button>Shop Now</button>
        </div>
      </div>
      <div className={styles.div2}>
        <h3>2</h3>
      </div>
      <div className={styles.div3}>
        <h3>3</h3>
      </div>
      <div className={styles.div4}>
        <h3>4</h3>
      </div>
    </Slider>
  );
}