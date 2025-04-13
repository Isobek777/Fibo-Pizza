import NextImgL from '../img/next.22.svg';
import Prev from '../img/prev.22.svg';
import Slide1 from '../img/slide1.jpg';
import Slide2 from '../img/slide2.jpg';

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide1</SwiperSlide>
        <SwiperSlide>Slide1</SwiperSlide>
        <SwiperSlide>Slide1</SwiperSlide>
        <SwiperSlide>Slide1</SwiperSlide>
        <SwiperSlide>Slide1</SwiperSlide>
        <SwiperSlide>Slide1</SwiperSlide>
        <SwiperSlide>Slide1</SwiperSlide>
        <SwiperSlide>Slide1</SwiperSlide>
        <SwiperSlide>Slide1</SwiperSlide>
      </Swiper>
    </>
  );
}