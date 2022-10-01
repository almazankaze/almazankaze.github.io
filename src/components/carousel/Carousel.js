import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./carousel.css";

// import required modules
import { Pagination } from "swiper";

const Carousel = () => {
  return (
    <div className="timeline">
      <Swiper
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <h3>2014</h3>
          <p>Customer Service Rep at Best Buy</p>
        </SwiperSlide>
        <SwiperSlide>
          <h3>2016</h3>
          <p>Certification in PC Repair</p>
        </SwiperSlide>
        <SwiperSlide>
          <h3>2017</h3>
          <p>Associate's Degree in Computer and Information Sciences</p>
        </SwiperSlide>
        <SwiperSlide>
          <h3>2020</h3>
          <p>Bachelor's in Computer Science in Software Engineer</p>
        </SwiperSlide>
        <SwiperSlide>
          <h3>2021</h3>
          <p>Data Entry at Industrial Steel</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
