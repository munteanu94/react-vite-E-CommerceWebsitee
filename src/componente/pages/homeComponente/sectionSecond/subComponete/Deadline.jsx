import { useState, useEffect, useRef } from "react";

export default function DeadLine() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  function startTimer() {
    const countdownDate = new Date("May 30, 2024 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  }

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <div className="containerTimeline">
      <div className="today">
        <div className="rectangle"></div>
        <p>Today's</p>
      </div>
      <div className="flashSales">
        <h2>Flash Sales</h2>
        <div className="deadline">
          <div>
            <span>Days</span>
            <p>
              {timerDays} <span>:</span>
            </p>
          </div>
          <div>
            <span>Hours</span>
            <p>
              {timerHours} <span>:</span>
            </p>
          </div>
          <div>
            <span>Minutes</span>
            <p>
              {timerMinutes} <span>:</span>
            </p>
          </div>
          <div>
            <span>Seconds</span>
            <p>{timerSeconds}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
