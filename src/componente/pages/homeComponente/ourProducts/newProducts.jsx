import Star from "../sectionSecond/subComponete/StarsFeedback.jsx";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { newProducts } from "./lisOurProducts.js";
import "./ourProducts.css";

export default function NewProducts() {
  return (
    <div className="containerNewProducts">
      {newProducts.map((user) => (
        <div key={user.id}>
          <div className="sliderCart">
            <div className="containerCart">
              <div className="containerImg">
                <img src={user.image} alt="cart" />
                <div className="sales newCart">{user.sale}</div>
                <div className="icon heart">
                  <FaRegHeart />
                </div>
                <div className="icon eyes">
                  <IoEyeOutline />
                </div>
                <div className="ContainerAdd">
                  <button className="btnAdd">Add To Cart</button>
                </div>
              </div>
              <div>
                <div className="textCart">
                  <h5>{user.name}</h5>
                  <div className="cartprice flex">
                    <span>${user.price}</span>
                    <div className="feedback">
                      <div>
                        <Star stars={user.stars} reviews={user.reviews} />
                      </div>
                    </div>
                  </div>
                  <div className="inputRadio">
                    <input
                      type="radio"
                      name="products"
                      id={user.input1}
                      checked
                    />
                    <input type="radio" name="products" id={user.input2} />
                    <label htmlFor={user.input1} className="box num1">
                      <div className="circle" id={user.input1}>
                        <div className="circleSmoll"></div>
                      </div>
                    </label>
                    <label htmlFor={user.input2} className="box num2">
                      <div className="circle" id={user.input2}>
                        <div className="circleSmoll"></div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
