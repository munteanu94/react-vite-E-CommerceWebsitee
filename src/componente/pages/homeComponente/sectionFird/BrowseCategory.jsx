import React, { useRef, useState, useEffect } from "react";
// import "./btnSlide.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
// import "../SectionSecond.css";
import "swiper/css";
import "swiper/css/navigation";
import Aos from "aos";
import "aos/dist/aos.css";
import "../sectionSecond/subComponete/Swiper.css";
import { category } from "./Categoris.js";
import "./BrowseCategory.css";

export default function BrowseCategory() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="containerFird" data-aos="flip-left">
      <div className="containerTitle">
        <div className="today">
          <div className="rectangle"></div>
          <p>Today's</p>
        </div>

        <h2>Browse By Category</h2>
      </div>
      <div className="containerSlider3">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper swiperTwo"
          breakpoints={{
            1185: {
              slidesPerView: 6,
            },
            1000: {
              slidesPerView: 5,
            },
            800: {
              slidesPerView: 4,
            },
            600: {
              slidesPerView: 3,
            },
            400: {
              slidesPerView: 2,
            },
            300: {
              slidesPerView: 1,
            },
            100: {
              slidesPerView: 1,
            },
          }}
        >
          {category.map((user) => (
            <SwiperSlide key={user.id}>
              <div className="sliderCart">
                <div className="containerCart">
                  <div className="containerIcons">
                    <img src={user.image} alt="cart" />
                  </div>
                  <h5>{user.name}</h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
