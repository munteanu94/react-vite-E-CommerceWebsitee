import React from "react";
import { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { ShopContext } from "../homeComponente/sectionSecond/subComponete/Context";
import Star from "../homeComponente/sectionSecond/subComponete/StarsFeedback";
import "./AllProduscts.css";
export default function AllProducts(props) {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState(data);

  const { addToCart, cartItems } = useContext(ShopContext);
  useEffect(() => {
    Axios("https://fakestoreapi.com/products/").then((res) => {
      console.log(res.data);
      setData(res.data);
      setCategory(res.data);
    });
  }, []);
  const filterItems = (catItem) => {
    const updateItems = data.filter((item) => {
      return item.category === catItem;
    });
    setCategory(updateItems);
  };
  return (
    <div>
      <p
        style={{
          marginTop: 50,
          marginLeft: 80,
        }}
      >
        <span
          style={{
            color: "silver",
          }}
        >
          Home
        </span>
        / Show Now
      </p>
      <div className="btnsShowNow">
        <button onClick={() => setCategory(data)}>All</button>
        <button onClick={() => filterItems("men's clothing")}>
          Men's clothing
        </button>
        <button onClick={() => filterItems("women's clothing")}>
          Women's Clothing
        </button>
        <button onClick={() => filterItems("jewelery")}>Jewelery</button>
        <button onClick={() => filterItems("electronics")}>Electronics</button>
      </div>
      <div className="containerShowNow">
        {category.map((user) => (
          <div className="sliderCart cartShowNow">
            <div className="containerCart">
              <div className="containerImg">
                <Link to="/productDetails">
                  <img src={user.image} alt="cart" />

                  <div className="icon heart">
                    <FaRegHeart />
                  </div>
                  <div className="icon eyes">
                    <IoEyeOutline />
                  </div>
                </Link>
                <div className="ContainerAdd">
                  <button className="btnAdd" onClick={() => addToCart(user.id)}>
                    Add To Cart
                    {cartItems[user.id] > 0 && <>({cartItems[user.id]})</>}
                  </button>
                </div>
              </div>

              <div>
                <div className="textCart">
                  <h5>{user.title}</h5>

                  <div className="cartprice">
                    <span>${user.price}</span>
                  </div>
                  <div className="feedback">
                    <div>
                      <Star
                        stars={user.rating.rate}
                        reviews={user.rating.count}
                      />
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
