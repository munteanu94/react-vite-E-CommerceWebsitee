import React, { useRef, useState } from "react";
// import "./btnSlide.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
// import "../SectionSecond.css";
import "swiper/css";
import "swiper/css/navigation";

import "../sectionSecond/subComponete/Swiper.css";
import { category } from "./Categoris.js";
import "./BrowseCategory.css";

export default function BrowseCategory() {
  return (
    <div className="containerFird">
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
