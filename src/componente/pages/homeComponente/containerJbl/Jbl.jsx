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
      setTimerSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          setTimerMinutes((prevMinutes) => {
            if (prevMinutes > 0) {
              setTimerSeconds(59);
              return prevMinutes - 1;
            } else {
              setTimerHours((prevHours) => {
                if (prevHours > 0) {
                  setTimerMinutes(59);
                  setTimerSeconds(59);
                  return prevHours - 1;
                } else {
                  setTimerDays((prevDays) => {
                    if (prevDays > 0) {
                      setTimerHours(23);
                      setTimerMinutes(59);
                      setTimerSeconds(59);
                      return prevDays - 1;
                    } else {
                      setTimerDays(5);
                      setTimerHours(23);
                      setTimerMinutes(59);
                      setTimerSeconds(59);
                      return 0;
                    }
                  });
                  return prevHours;
                }
              });
              return prevMinutes;
            }
          });
          return prevSeconds;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
