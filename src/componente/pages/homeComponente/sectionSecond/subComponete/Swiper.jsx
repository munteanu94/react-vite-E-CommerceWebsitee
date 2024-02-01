import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

import "./Swiper.css";

export default function SliderCart({
  image,
  sale,
  name,
  price,
  prastprice,
  number,
}) {
  return (
    <div className="sliderCart">
      <div className="containerCart">
        <div className="containerImg">
          <div className="sales">-{sale}%</div>
          <div className="icon heart">
            <FaRegHeart />
          </div>
          <div className="icon eyes">
            <IoEyeOutline />
          </div>
          <div className="ContainerAdd">
            <button className="btnAdd">{name}</button>
          </div>
        </div>
        <div>
          <div className="textCart">
            <h5>Havit Hv-G92 Gamepad</h5>
            <div className="cartprice">
              <span>${price}</span>
              <strike>${prastprice}</strike>
            </div>
            <div className="feedback">
              <div>
                <FaStar />

                <FaStar />

                <FaStar />

                <FaStar />

                <FaStar />
              </div>
              <p>({number})</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
