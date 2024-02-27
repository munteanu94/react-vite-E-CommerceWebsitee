import { Link } from "react-router-dom";
import "./newArrival.css";
import type1 from "./image/type1.png";
import type2 from "./image/type2.png";
import type3 from "./image/type3.png";
import type4 from "./image/type4.png";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function NewArrival() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="containerNewArrival">
      <div>
        <div className="today">
          <div className="rectangle"></div>
          <p>This Month</p>
        </div>
        <h2>Explore Our Products</h2>
      </div>
      <div className="containerType" data-aos="zoom-in">
        <div className="arrive1">
          <img src={type1} alt="type"></img>
          <div className="columnArrival">
            <h4>PlayStation 5</h4>
            <p>
              Black and White version of the Ps5
              <br />
              coming out on sale.
            </p>
            <Link to="/ViewAllProducts" className="linkShop">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="arrive2" data-aos="zoom-in-up">
          <img src={type2} alt="type"></img>
          <div className="columnArrival">
            <h4>Women’s Collections</h4>
            <p>
              Featured woman collections that
              <br />
              give you another vibe.
            </p>
            <Link to="/ViewAllProducts" className="linkShop">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="arrive3" data-aos="zoom-in-down">
          <img src={type3} alt="type"></img>
          <div className="columnArrival">
            <h4>Speakers</h4>
            <p>Amazon wireless speakers</p>
            <Link to="/ViewAllProducts" className="linkShop">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="arrive4" data-aos="zoom-in-left">
          <img src={type4} alt="type"></img>
          <div className="columnArrival">
            <h4>Perfume</h4>
            <p>GUCCI INTENSE OUD EDP</p>
            <Link to="/ViewAllProducts" className="linkShop">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
