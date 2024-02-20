import React, { useContext, useEffect } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ShopContext } from "../homeComponente/sectionSecond/subComponete/Context.jsx";
import { carts } from "../homeComponente/sectionSecond/subComponete/ListCart.js";
import "./cart-add.css";
export default function CartItem({ data, totalChanse }) {
  const {
    addToCart,
    cartItems,
    removeFomCart,
    updateCartItemCount,
    getTotalCart,
    getTotalCartAmount,
    changeAmount,
  } = useContext(ShopContext);

  const { id, image, name, price, totalP } = data;
  const totalPrice = getTotalCart();
  const tatalPriceString = Object.entries(totalPrice).map(
    ([producId, total]) => <div key={producId}> $ {total}</div>
  );
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
            <p className="lastP">{tatalPriceString[id - 1]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
