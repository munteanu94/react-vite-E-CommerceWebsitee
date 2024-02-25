import { Link } from "react-router-dom";
import imageJbl from "../containerJbl/jbl.png";
import React, { useState, useEffect } from "react";
import "./Jbl.css";
export default function BoxJbl() {
  const [timeLeft5d, setTimeLeft5d] = useState(5 * 24 * 60 * 60);
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft5d > 0) {
        setTimeLeft5d((prevTime) => prevTime - 1);
      } else if (timeLeft > 0) {
        setTimeLeft((prevTime) => prevTime - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    const resetTime = () => {
      setTimeLeft(24 * 60 * 60);
    };
    window.addEventListener("focus", resetTime);
    return () => window.removeEventListener("focus", resetTime);
  }, []);

  const formatTime = (time) => {
    const days = Math.floor(time / 24);
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")} : ${minutes
      .toString()
      .padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="containerJbl">
      <div className="text">
        <h5>Categories</h5>
        <h2>
          Enhance Your
          <br /> Music Experience
        </h2>
        <div className="deadLine">
          <div>
            <h4>23</h4>
            <p>Hours</p>
          </div>
          <div>
            <h4>05</h4>
            <p>Days</p>
          </div>
          <div>
            <h4>59</h4>
            <p>Minutes</p>
          </div>
          <div>
            <h4>35</h4>
            <p>Seconds</p>
          </div>
        </div>
        <div className="ContainerBuyNow">
          <Link className="bntBuynow">Buy Now</Link>
        </div>
      </div>
      <div className="image">
        <img src={imageJbl} alt="jbl" />
      </div>
    </div>
  );
}
