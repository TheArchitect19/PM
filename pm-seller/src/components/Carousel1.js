import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel1.css';
import {  multiData } from './data2';
import  ArrowBackIos  from '@mui/icons-material/ArrowBackIos';
import  ArrowForwardIos  from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import { useEffect } from 'react';

import Product from "./home/Products/Product1";
import { paginationItems } from "../constants1";

const items = paginationItems;
function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item._id} className="w-full">
            <Product
              _id={item._id}
              img={item.img}
              productName={item.productName}
              price={item.price}
              color={item.color}
              badge={item.badge}
              des={item.des}
            />
          </div>
        ))}
    </>
  );
}

let slidesToShow = 5;
const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {  (
        <div className={className} onClick={onClick}>
          <ArrowBackIos style={{ color: 'black', fontSize: '25px' }} />
        </div>
      )}
    </>
  );
};
const NextBtn = (props) => {
  const { className, onClick, slideCount, currentSlide } = props;
  console.log(props);
  return (
    <>
      { (
        <div className={className} onClick={onClick}>
          <ArrowForwardIos style={{ color: 'black', fontSize: '25px' }} />
        </div>
      )}
    </>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: slidesToShow,
  slidesToScroll: 2,
  infinite: true,
  autoplay: true,
  speed: 300,
  // slidesToScroll={3}
  responsive: [
    {
      breakpoint: 526,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const MultiItemCarousel = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  if (width <= 526) {
    slidesToShow = 1;
  } else if (width > 526 && width <= 769) {
    slidesToShow = 3;
  } else if (width > 769 && width <= 1025) {
    slidesToShow = 4;
  } else {
    slidesToShow = 5;
  }

  return (
    <div style={{ margin: '40px' }} className='carousel1'>
    <h2>HANDPICKED FOR YOU</h2>
    <div className='icarousel1'>
      <Slider {...carouselProperties} >
        {paginationItems.map((item) => (
          <div key={item._id} className="w-100">
            <Product
              _id={item._id}
              img={item.img}
              productName={item.productName}
              price={item.price}
              color={item.color}
              badge={item.badge}
              des={item.des}
              shop={item.shop}
              mprice={item.mprice}
              off={item.off}
              review={item.review}
            />
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};


export default MultiItemCarousel;