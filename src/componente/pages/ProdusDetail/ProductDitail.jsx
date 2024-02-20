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
import { carts } from "../homeComponente/sectionSecond/subComponete/ListCart.js";
import { useCallback, useMemo, useState } from "react";

import Star from "../homeComponente/sectionSecond/subComponete/StarsFeedback";
import { FiDivideCircle } from "react-icons/fi";

export default function ProductDetail(data) {
  const [images, setImages] = useState({
    img1: produs1,
    img2: produs2,
    img3: produs3,
    img4: produs4,
    img5: produs5,
  });
  const [activeImg, setActiveImg] = useState(images.img5);
  const [btnActiv, setBtnActive] = useState(null);
  const [value, setValue] = useState(1);
  const handleClick = useCallback(
    (btnName) => {
      setBtnActive(btnName === btnActiv ? null : btnName);
    },
    [btnActiv]
  );

  return (
    <div className="productDitailAc">
      <p className="namePage">
        <span>Account / Garming / </span> Havic HV G-92 Garnepod
      </p>
      <div className="boxDetailAc">
        <div className="boxImages">
          <img src={images.img5} onClick={() => setActiveImg(images.img5)} />
          <img src={activeImg} className="boxLarge" />
          <img src={images.img2} onClick={() => setActiveImg(images.img2)} />
          <img src={images.img3} onClick={() => setActiveImg(images.img3)} />
          <img src={images.img4} onClick={() => setActiveImg(images.img4)} />
        </div>
        <div className="boxDitailProdus">
          <h3>Havic HV G-92 Gamepad</h3>
          <div className="feedbackDetail">
            <Star stars={carts[0].stars} reviews={carts[0].reviews} />| In Stock
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
              <button
                className={
                  btnActiv === "XS" ? "buttonSize activeBtn" : "buttonSize"
                }
                onClick={() => handleClick("XS")}
              >
                XS
              </button>
              <button
                className={
                  btnActiv === "S" ? "buttonSize activeBtn" : "buttonSize"
                }
                onClick={() => handleClick("S")}
              >
                S
              </button>
              <button
                className={
                  btnActiv === "M" ? "buttonSize activeBtn" : "buttonSize"
                }
                onClick={() => handleClick("M")}
              >
                M
              </button>
              <button
                className={
                  btnActiv === "L" ? "buttonSize activeBtn" : "buttonSize"
                }
                onClick={() => handleClick("L")}
              >
                L
              </button>
              <button
                className={
                  btnActiv === "XL" ? "buttonSize activeBtn" : "buttonSize"
                }
                onClick={() => handleClick("XL")}
              >
                XL
              </button>
            </div>
          </div>
          <div className="boxAmount">
            <div className="boxInputChange">
              <button
                className="btnDecrease"
                onClick={() => {
                  setValue((prev) => (prev > 0 ? prev - 1 : 0));
                }}
              >
                -
              </button>
              <input type="number" value={value} />
              <button
                className="btnIncrease"
                onClick={() => {
                  setValue((prev) => prev + 1);
                }}
              >
                +
              </button>
            </div>
            <div className="boxbtnBuyNow">
              <button className="btnBuyProducsAc">Buy Now</button>
              <button className="btnHeartAc">
                <FaRegHeart />
              </button>
            </div>
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
