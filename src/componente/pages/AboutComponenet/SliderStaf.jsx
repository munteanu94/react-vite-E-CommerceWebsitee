import React, { useRef, useState } from "react";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";

import "./SliderStaf.css";
import { staff } from "./SliderStaf.js";
// import required modules
import { Pagination } from "swiper/modules";

export default function SliderStaff() {
  return (
    <div className="ContainerSlideStaff">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination]}
        className="mySwiper staffSwiper"
        breakpoints={{
          900: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 2,
          },
          100: {
            slidesPerView: 1,
          },
        }}
      >
        {staff &&
          staff.map((value) => (
            <SwiperSlide key={value.id}>
              <div className="boxImgSlider">
                <img
                  src={import.meta.env.VITE_PUBLIC_URL + value.image}
                  alt={value.image}
                  name={value.name}
                />
              </div>

              <h2>{value.name}</h2>
              <p>{value.post}</p>
              <div className="staffMedia">
                <CiTwitter />
                <FaInstagram />
                <RiLinkedinLine />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
