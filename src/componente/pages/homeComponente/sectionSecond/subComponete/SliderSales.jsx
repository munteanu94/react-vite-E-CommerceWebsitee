import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import "../SectionSecond.css";
// import list of cart
import { carts } from "./ListCart.js";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import cart1 from "./image2/cart1.png";
import "./Swiper.css";

export default function SliderSales() {
  return (
    <div className="containerSlider2">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {carts.map((user) => (
          <SwiperSlide>
            <div className="sliderCart">
              <div className="containerCart">
                <div className="containerImg">
                  <img src={cart1} alt="cart" />
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
                        <FaStar />

                        <FaStar />

                        <FaStar />

                        <FaStar />

                        <FaStar />
                      </div>
                      <p>({user.number})</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <SliderCart
            image={carts[0].image}
            sale={carts[0].sale}
            name={carts[0].name}
            price={carts[0].price}
            prastprice={carts[0].prastprice}
            number={carts[0].number}
          />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
}
