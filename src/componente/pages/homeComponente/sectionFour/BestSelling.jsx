import ButtonAll from "../sectionSecond/subComponete/ButtonAll.jsx";
import "./Bestselling.css";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { BestProducts } from "./bestProducts.js";
export default function BestSelling() {
  return (
    <div className="ContainerBestSelling">
      <div className="containerFirst">
        <div>
          <div className="today">
            <div className="rectangle"></div>
            <p>This Month</p>
          </div>
          <h2>Best Selling Products</h2>
        </div>
        <ButtonAll />
      </div>
      <div className="containerBest">
        {BestProducts.map((user) => (
          <div key={user.id}>
            <div className="sliderCart">
              <div className="containerCart">
                <div className="containerImg">
                  <img src={user.image} alt="cart" />
                  <div className="icon heart">
                    <FaRegHeart />
                  </div>
                  <div className="icon eyes">
                    <IoEyeOutline />
                  </div>
                </div>
                <div>
                  <div className="textCart">
                    <h5>{user.name}</h5>
                    <div className="cartprice">
                      <span>${user.price}</span>
                      <strike>${user.prastprice}</strike>
                    </div>
                    <div className="feedback">
                      <div>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <p>({user.reviews})</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
