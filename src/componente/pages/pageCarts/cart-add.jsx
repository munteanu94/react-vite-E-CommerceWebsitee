import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import Star from "../homeComponente/sectionSecond/subComponete/StarsFeedback";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

import "./cart-add.css";
export default function CartItem(props) {
  const { id, image, sale, name, price, prastprice, stars, reviews } =
    props.data;
  return (
    <div className="containerCartAdd">
      <div key={id}>
        <div className="CartAdd">
          <div className="containerCart">
            <div className="addImg">
              <img src={import.meta.env.VITE_PUBLIC_URL + image} alt="cart" />
              <p>{name}</p>
            </div>
            <p className="gridCenter">${price}</p>
            <div className="gridCenter">
              <div className="inputChange ">
                <input className="inputAddCart" type="number"></input>
                <button>
                  <MdKeyboardArrowUp />
                </button>
                <button>
                  <MdKeyboardArrowDown />
                </button>
              </div>
            </div>
            <p className="lastP">Totatl</p>
          </div>
        </div>
      </div>
    </div>
  );
}
