import React, { useContext } from "react";
import { ShopContext } from "../homeComponente/sectionSecond/subComponete/Context.jsx";
import { carts } from "../homeComponente/sectionSecond/subComponete/ListCart.js";
import CartItem from "./cart-add.jsx";
import "./Carts.css";
import { FaPenClip } from "react-icons/fa6";
export default function Carts() {
  const { addToCart, cartItems } = useContext(ShopContext);
  return (
    <div className="containerCarts">
      <p>
        <span>Home</span> / Cort
      </p>
      <div className="boxCartsAdd">
        <div className="containerSubtitle">
          <p>Product</p>
          <p className="gridCenter">Price</p>
          <p className="gridCenter">Quantity</p>
          <p className="lastP">Subtotal</p>
        </div>
        <div className="CartItems">
          {carts.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}
