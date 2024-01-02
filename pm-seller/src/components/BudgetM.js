import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel1.css";
import {  multiData } from "./data";
let slidesToShow = 2;


const carouselProperties = {

  slidesToShow: slidesToShow,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  speed: 9000,
  autoplaySpeed: 0,
  cssEase: "linear",
  // slidesToScroll={3}
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,

      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,

      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 1,

        slidesToScroll: 1,
      },
    },
  ],
};

const MultiItemCarousel = () => {
  

 

  return (
    <div className='budget2'>
      <Slider {...carouselProperties} >
        {multiData.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </Slider>
    </div>
  );
};

const Card = ({ item }) => {
  console.log(item);
  return (
    <>
      <div className='bigbudget'>
        <h2>BUDGET BUYS</h2>
        <h2 className='yo2'>BUDGET BUYS</h2>
      </div>
    </>
  );
};

export default MultiItemCarousel;
