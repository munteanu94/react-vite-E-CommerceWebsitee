import React, { useContext, useEffect } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ShopContext } from "../homeComponente/sectionSecond/subComponete/Context.jsx";
import { carts } from "../homeComponente/sectionSecond/subComponete/ListCart.js";
import "./cart-add.css";
export default function CartItem({ data, myFunction }) {
  const {
    addToCart,
    cartItems,
    removeFomCart,
    updateCartItemCount,
    getTotalCart,
    getTotalCartAmount,
  } = useContext(ShopContext);
  const totalPrice = getTotalCart();
  const { id, image, name, price, totalP } = data;

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
                <input
                  className="inputAddCart"
                  type="number"
                  value={cartItems[id]}
                  onChange={(e) =>
                    updateCartItemCount(Number(e.target.value), id)
                  }
                ></input>
                <button onClick={() => addToCart(id)}>
                  <MdKeyboardArrowUp />
                </button>
                <button onClick={() => removeFomCart(id)}>
                  <MdKeyboardArrowDown />
                </button>
              </div>
            </div>
            <p className="lastP">{myFunction}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
