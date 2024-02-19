import "./ProductDitail.css";
import produs1 from "./produs1.png";
import produs2 from "./produs2.png";
import produs3 from "./produs3.png";
import produs4 from "./produs4.png";
import produs5 from "./produs5.png";
import { FaRegHeart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import SliderSales from "../homeComponente/sectionSecond/subComponete/SliderSales.jsx";

import Star from "../homeComponente/sectionSecond/subComponete/StarsFeedback";
import { FiDivideCircle } from "react-icons/fi";
export default function ProductDetail() {
  return (
    <div className="productDitailAc">
      <p className="namePage">
        <span>Account / Garming / </span> Havic HV G-92 Garnepod
      </p>
      <div className="boxDetailAc">
        <div className="boxImages">
          <img src={produs1} />
          <img src={produs5} className="boxLarge" />
          <img src={produs2} />
          <img src={produs3} />
          <img src={produs4} />
        </div>
        <div className="boxDitailProdus">
          <h3>Havic HV G-92 Gamepad</h3>
          <div>
            <Star />| In Stock
          </div>
          <p className="priceDetail">$192.00</p>
          <p className="discribe">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>

          <div className="boxRadio">
            <input type="radio" name="color" id="color1" checked />
            <input type="radio" name="color" id="color2" />
            <p>Colours:</p>
            <label htmlFor="color1" className="num1">
              <div className="spanCircle1">
                <div className="spanSmoll" id="color1"></div>
              </div>
            </label>
            <label htmlFor="color2" className="num2">
              <div className="spanCircle2">
                <div className="spanSmoll" id="color2"></div>
              </div>
            </label>
          </div>
          <div className="boxSize">
            <p>Size : </p>
            <div className="boxbtnSize">
              <button>XS</button>
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
            </div>
          </div>
          <div className="boxAmount">
            <div className="boxInputChange">
              <button className="btnDecrease">-</button>
              <input type="number" value="1" />
              <button className="btnIncrease">+</button>
            </div>
            <button className="btnBuyProducsAc">Buy Now</button>
            <button className="btnHeartAc">
              <FaRegHeart />
            </button>
          </div>
          <div className="boxDelivery">
            <div className="delivery">
              <TbTruckDelivery className="iconCarDelivery" />
              <div>
                <h4>Free Delivery</h4>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="returnDelivery">
              <MdOutlinePublishedWithChanges className="iconCarDelivery" />
              <div>
                <h4>Return Delivery</h4>
                <p> Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SliderSales />
    </div>
  );
}
