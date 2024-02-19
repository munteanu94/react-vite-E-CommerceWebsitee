import React, { useContext, useState } from "react";
import { ShopContext } from "../homeComponente/sectionSecond/subComponete/Context.jsx";
import { carts } from "../homeComponente/sectionSecond/subComponete/ListCart.js";
import CartItem from "./cart-add.jsx";
import "./Carts.css";
import { useNavigate } from "react-router-dom";

export default function Carts() {
  const [quantity, setQuantity] = useState("");
  const [editQuantity, setEditQuantity] = useState({
    id: "",
    status: false,
  });
  const { removeFomCart, cartItems, getTotalCartAmount, getTotalCart } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const total = getTotalCart();
  const navigate = useNavigate();
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
              return (
                <CartItem data={product} myFunction={total} key={product.id} />
              );
            }
          })}
        </div>
        <div className="btnControl">
          <button onClick={() => navigate("/react-vite-E-CommerceWebsitee/")}>
            Return To Shop
          </button>
          <button onClick={() => removeFomCart()}>Update Cart</button>
        </div>
        <div className="containerBottomCart">
          <div className="boxApply">
            <input type="text" placeholder="Coupon Code" />
            <button>Apply Coupon</button>
          </div>
          <div className="boxCartTotal">
            <h4>Cart Total</h4>
            <div>
              <p>Subtotal:</p>
              <p>${totalAmount}</p>
            </div>
            <div>
              <p>Shopping:</p>
              <p>Free</p>
            </div>
            <div>
              <p>Total:</p>
              <p>${totalAmount}</p>
            </div>
            <button onClick={() => navigate("/ProceesCheckout")}>
              Procees to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
