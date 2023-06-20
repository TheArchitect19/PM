import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel1.css';
import {  multiData } from './data';
import  ArrowBackIos  from '@mui/icons-material/ArrowBackIos';
import  ArrowForwardIos  from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import { useEffect } from 'react';
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
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
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

  if (width <= 426) {
    slidesToShow = 1;
  } else if (width > 426 && width <= 769) {
    slidesToShow = 3;
  } else if (width > 769 && width <= 1025) {
    slidesToShow = 4;
  } else {
    slidesToShow = 5;
  }

  return (
    <div style={{ margin: '40px' }} className='carousel1'>
    <h2>HANDPICKED FOR YOU</h2>
      <Slider {...carouselProperties} >
        {multiData.map((item) => (
          <Card item={item} />
        ))}
      </Slider>
    </div>
  );
};

const Card = ({ item }) => {
  return (
       <div className='cont'>
       <img
        className='multi__image'
        src={item}
        alt=''
        style={{
          width: '100%',
          height: '170px',
          objectFit: 'contain',
          marginBottom: '10px',
        }}
      />
      <div className='card_info'>
        <h5>Parag Fashion</h5>
        <h6>Women Solid Sweatshirt</h6>
        <p>Rs. 1079 <span> Rs. 1799 </span><a style={{color:'#FF0724'}}> (40% OFF)</a></p>
        <p style={{color:'grey',fontSize:'15px'}}>56 reviews</p>
      </div>
      </div>
  );
};

export default MultiItemCarousel;
