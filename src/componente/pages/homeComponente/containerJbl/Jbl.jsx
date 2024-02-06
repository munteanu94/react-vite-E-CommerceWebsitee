import { Link } from "react-router-dom";
import imageJbl from "../containerJbl/jbl.png";
import "./Jbl.css";
export default function BoxJbl() {
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
