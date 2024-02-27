import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slider1 from "./imgSlider/slider1.png";
import logo from "./imgSlider/logo.png";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import "./Slider.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Slider() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="containerSlider" data-aos="fade-left">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide className="wrapperSlide">
          <div className="text">
            <div className="logoSlide">
              <img src={logo} alt="logo" />
              <p>IPhone 14 Series</p>
            </div>
            <h2>
              UP to 10% <br /> off Voucher
            </h2>
            <div className="containerButton">
              <Link to="/ViewAllProducts" className="pagesVoucer">
                Shop Now <GoArrowRight className="arrowRight" />
              </Link>
            </div>
          </div>
          <img className="imgSlide" src={slider1} />
        </SwiperSlide>
        <SwiperSlide className="wrapperSlide">
          <div className="text">
            <div className="logoSlide">
              <img src={logo} alt="logo" />
              <p>IPhone 14 Series</p>
            </div>
            <h2>
              UP to 10% <br /> off Voucher
            </h2>
            <div className="containerButton">
              <Link className="pagesVoucer">
                Shop Now <GoArrowRight className="arrowRight" />
              </Link>
            </div>
          </div>
          <img className="imgSlide" src={slider1} />
        </SwiperSlide>
        <SwiperSlide className="wrapperSlide">
          <div className="text">
            <div className="logoSlide">
              <img src={logo} alt="logo" />
              <p>IPhone 14 Series</p>
            </div>
            <h2>
              UP to 10% <br /> off Voucher
            </h2>
            <div className="containerButton">
              <Link className="pagesVoucer">
                Shop Now <GoArrowRight className="arrowRight" />
              </Link>
            </div>
          </div>
          <img className="imgSlide" src={slider1} />
        </SwiperSlide>
        <SwiperSlide className="wrapperSlide">
          <div className="text">
            <div className="logoSlide">
              <img src={logo} alt="logo" />
              <p>IPhone 14 Series</p>
            </div>
            <h2>
              UP to 10% <br /> off Voucher
            </h2>
            <div className="containerButton">
              <Link className="pagesVoucer">
                Shop Now <GoArrowRight className="arrowRight" />
              </Link>
            </div>
          </div>
          <img className="imgSlide" src={slider1} />
        </SwiperSlide>
        <SwiperSlide className="wrapperSlide">
          <div className="text">
            <div className="logoSlide">
              <img src={logo} alt="logo" />
              <p>IPhone 14 Series</p>
            </div>
            <h2>
              UP to 10% <br /> off Voucher
            </h2>
            <div className="containerButton">
              <Link className="pagesVoucer">
                Shop Now <GoArrowRight className="arrowRight" />
              </Link>
            </div>
          </div>
          <img className="imgSlide" src={slider1} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
