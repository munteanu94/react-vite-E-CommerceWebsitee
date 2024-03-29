import React, { useRef, useState, useContext } from "react";
import "./btnSlide.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import "../SectionSecond.css";
import "swiper/css";
import "swiper/css/navigation";
import { carts } from "./ListCart.js";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import Star from "./StarsFeedback.jsx";
import "./Swiper.css";

import { ShopContext } from "./Context.jsx";

export default function SliderSales(props) {
  const { addToCart, cartItems } = useContext(ShopContext);

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
          breakpoints={{
            1185: {
              slidesPerView: 4,
            },
            1000: {
              slidesPerView: 3,
            },
            700: {
              slidesPerView: 2,
            },
            400: {
              slidesPerView: 1,
            },
            100: {
              slidesPerView: 1,
            },
          }}
        >
          {carts.map((user) => (
            <SwiperSlide key={user.id}>
              <div className="sliderCart">
                <div className="containerCart">
                  <div className="containerImg">
                    <Link to="/productDetails">
                      <img
                        src={import.meta.env.VITE_PUBLIC_URL + user.image}
                        alt="cart"
                      />
                      <div className="sales">-{user.sale}%</div>
                      <div className="icon heart">
                        <FaRegHeart />
                      </div>
                      <div className="icon eyes">
                        <IoEyeOutline />
                      </div>
                    </Link>
                    <div className="ContainerAdd">
                      <button
                        className="btnAdd"
                        onClick={() => addToCart(user.id)}
                      >
                        Add To Cart
                        {cartItems[user.id] > 0 && <>({cartItems[user.id]})</>}
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="textCart">
                      <h5>{user.name}</h5>
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
