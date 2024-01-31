export default function DeadLine() {
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
              00 <span>:</span>
            </p>
          </div>
          <div>
            <span>Hours</span>
            <p>
              00 <span>:</span>
            </p>
          </div>
          <div>
            <span>Minutes</span>
            <p>
              00 <span>:</span>
            </p>
          </div>
          <div>
            <span>Seconds</span>
            <p>00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
