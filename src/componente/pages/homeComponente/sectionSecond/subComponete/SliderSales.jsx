import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import "../SectionSecond.css";
import "swiper/css";
import "swiper/css/navigation";
import { carts } from "./ListCart.js";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import Star from "./StarsFeedback.jsx";
import "./swiper.css";

export default function SliderSales() {
  return (
    <div className="block">
      <div className="containerSlider2">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper swiperTwo"
        >
          {carts.map((user) => (
            <SwiperSlide key={user.id}>
              <div className="sliderCart">
                <div className="containerCart">
                  <div className="containerImg">
                    <img src={user.image} alt="cart" />
                    <div className="sales">-{user.sale}%</div>
                    <div className="icon heart">
                      <FaRegHeart />
                    </div>
                    <div className="icon eyes">
                      <IoEyeOutline />
                    </div>
                    <div className="ContainerAdd">
                      <button className="btnAdd">Add To Cart</button>
                    </div>
                  </div>
                  <div>
                    <div className="textCart">
                      <h5>Havit Hv-G92 Gamepad</h5>
                      <div className="cartprice">
                        <span>${user.price}</span>
                        <strike>${user.prastprice}</strike>
                      </div>
                      <div className="feedback">
                        <div>
                          <Star stars={user.stars} reviews={user.reviews} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
