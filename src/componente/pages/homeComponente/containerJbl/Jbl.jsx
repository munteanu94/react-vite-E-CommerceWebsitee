import { Link } from "react-router-dom";
import imageJbl from "../containerJbl/jbl.png";
import React, { useState, useEffect } from "react";
import "./Jbl.css";
export default function BoxJbl() {
  const [timerDays, setTimerDays] = useState(5);
  const [timerHours, setTimerHours] = useState(23);
  const [timerMinutes, setTimerMinutes] = useState(59);
  const [timerSeconds, setTimerSeconds] = useState(59);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timerSeconds > 0) {
        setTimerSeconds(timerSeconds - 1);
      } else {
        if (timerMinutes > 0) {
          setTimerMinutes(timerMinutes - 1);
          setTimerSeconds(59);
        } else {
          if (timerHours > 0) {
            setTimerHours(timerHours - 1);
            setTimerMinutes(59);
            setTimerSeconds(59);
          } else {
            if (timerDays > 0) {
              setTimerDays(timerDays - 1);
              setTimerHours(23);
              setTimerMinutes(59);
              setTimerSeconds(59);
            } else {
              clearInterval(interval);
            }
          }
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timerDays, timerHours, timerMinutes, timerSeconds]);

  // useEffect(() => {
  //   const resetTimer = () => {
  //     setTimerDays(5);
  //     setTimerHours(23);
  //     setTimerMinutes(59);
  //     setTimerSeconds(59);
  //   };
  //   window.addEventListener("focus", resetTimer);
  //   return () => window.removeEventListener("focus", resetTimer);
  // }, []);

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
            <h4>{timerHours}</h4>
            <p>Hours</p>
          </div>
          <div>
            <h4>{timerDays}</h4>
            <p>Days</p>
          </div>
          <div>
            <h4>{timerMinutes}</h4>
            <p>Minutes</p>
          </div>
          <div>
            <h4>{timerSeconds}</h4>
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
