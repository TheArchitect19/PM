import BlogCard from '../subComponents/BlogCard'
import './WorkPage.css'
import { LogoComponent } from '../subComponents/LogoComponent'
import { SocialIcons } from '../subComponents/SocialIcons'
import { PowerButton } from '../subComponents/PowerButton'

import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/swiper-bundle.min.css';
import SwiperCore,{
  EffectCoverflow,
  Pagination,
  Navigation
} from "swiper";
import { Autoplay } from 'swiper';
import "swiper/swiper.min.css";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export const WorkPage = () => {

  SwiperCore.use([Autoplay]);
  SwiperCore.use([Pagination]);
  SwiperCore.use([Navigation]);

  return (
    <>
<div className="posts-main-container">
<PowerButton />
      
      <LogoComponent />
      <SocialIcons  />
        <div className="posts-title">
            <h1>BLOGS</h1>
        </div>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide><BlogCard/></SwiperSlide>
        <SwiperSlide><BlogCard/></SwiperSlide>
        <SwiperSlide><BlogCard/></SwiperSlide>
        <SwiperSlide><BlogCard/></SwiperSlide>
        <SwiperSlide><BlogCard/></SwiperSlide>
        <SwiperSlide><BlogCard/></SwiperSlide>
        <SwiperSlide><BlogCard/></SwiperSlide>
        <SwiperSlide><BlogCard/></SwiperSlide>
        <SwiperSlide><BlogCard/></SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}
