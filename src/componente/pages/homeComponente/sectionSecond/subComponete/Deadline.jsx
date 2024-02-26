import { useState, useEffect } from "react";

export default function DeadLine() {
  const [timerDays, setTimerDays] = useState(3);
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

  useEffect(() => {
    const resetTimer = () => {
      setTimerDays(3);
      setTimerHours(23);
      setTimerMinutes(59);
      setTimerSeconds(59);
    };
    window.addEventListener("reset", resetTimer);
    return () => window.removeEventListener("focus", resetTimer);
  }, []);

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
