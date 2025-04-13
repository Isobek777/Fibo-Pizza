import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import NextImgL from '../img/next.22.svg';
import Prev from '../img/prev.22.svg';
import Slide1 from '../img/slide1.jpg';
import Slide2 from '../img/slide2.jpg';

export const Swiper1 = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper.params.navigation.prevEl = ".custom-prev";
            swiperRef.current.swiper.params.navigation.nextEl = ".custom-next";
            swiperRef.current.swiper.navigation.init();
            swiperRef.current.swiper.navigation.update();
        }
    }, []);

    return (
        <>
        <div className="w-full max-w-[1245px] mx-auto px-5 relative  swiper-h">
            {/* Custom navigation buttons */}
            <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10">
                <img src={NextImgL} alt="prev slide" className="w-10 h-10" />
            </button>
            <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10">
                <img src={Prev} alt="next slide" className="w-10 h-10" />
            </button>

            <Swiper
                ref={swiperRef}
                slidesPerView={2}
                spaceBetween={20}
                speed={1050}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide style={{width:590, marginRight:20}}>
                    <img  src={Slide1} alt="slide" className="w-full h-auto" />
                </SwiperSlide>
                <SwiperSlide style={{width:590, marginRight:20}}>
                    <img src={Slide2} alt="slide" className="w-full h-auto" />
                </SwiperSlide>
                <SwiperSlide style={{width:590, marginRight:20}}>
                    <img src={Slide1} alt="slide" className="w-full h-auto" />
                </SwiperSlide>
                <SwiperSlide style={{width:590, marginRight:20}}>
                    <img src={Slide2} alt="slide" className="w-full h-auto" />
                </SwiperSlide>
            </Swiper>
        </div>

        <div className='w-full mx-auto px-5 relative  hidden sm:inline-block swiper-h-2 '>
        <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10">
                <img src={NextImgL} alt="prev slide" className="w-10 h-10" />
            </button>
            <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10">
                <img src={Prev} alt="next slide" className="w-10 h-10" />
            </button>
            <Swiper
                ref={swiperRef}
                spaceBetween={20}
                speed={1050}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
            >
        {/* <Swiper navigation={true} ref={swiperRef} nav  modules={[Navigation]} className="mySwiper"> */}
        <SwiperSlide><img src={Slide1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Slide1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Slide1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Slide1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Slide1} alt="" /></SwiperSlide>
      </Swiper>
        </div>
        </>
        
    );
};

export default Swiper1;
