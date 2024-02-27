import ButtonAll from "../sectionSecond/subComponete/ButtonAll.jsx";
import "./ourProducts.css";
import { ourProducts } from "./lisOurProducts.js";
import Star from "../sectionSecond/subComponete/StarsFeedback.jsx";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import NewProducts from "./newProducts.jsx";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function OurProducts() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="containerOurProducts" data-aos="zoom-out-left">
      <div>
        <div className="today">
          <div className="rectangle"></div>
          <p>This Month</p>
        </div>
        <h2>Explore Our Products</h2>
      </div>
      <div className="ourProducts">
        {ourProducts.map((user) => (
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <NewProducts />
      <ButtonAll />
    </div>
  );
}
