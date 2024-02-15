import React, { useContext, useState } from "react";
import { ShopContext } from "../homeComponente/sectionSecond/subComponete/Context.jsx";
import { carts } from "../homeComponente/sectionSecond/subComponete/ListCart.js";
import CartItem from "../pageCarts/cart-add.jsx";
import pay1 from "./pay1.png";
import pay2 from "./pay2.png";
import pay3 from "./pay3.png";
import pay4 from "./pay4.png";
import "./checkout.css";
import Validation from "../SingUpComponente/Validation.jsx";
export default function ProceesCheckout() {
  const [value, setValue] = useState({
    name: "",
    address: "",
    street: "",
    city: "",
    number: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  function handleInput(event) {
    const newObj = { ...value, [event.target.name]: event.target.value };
    setValue(newObj);
  }

  function handleValidation(event) {
    event.preventDefault();
    setErrors(Validation(value));
  }

  const { removeFomCart, cartItems, getTotalCartAmount, getTotalCart } =
    useContext(ShopContext);
  const total = getTotalCart();
  const totalAmount = getTotalCartAmount();
  return (
    <div className="containerCheckout">
      <form onSubmit={handleValidation}>
        <p
          style={{
            marginBottom: 50,
          }}
        >
          <span>Account / My acoount / Product / View Cart / </span> Checkout
        </p>
        <div className="containerWrapperCheck">
          <div className="containerbilling">
            <form>
              <h2>Billing Details</h2>
              <ul>
                <li>
                  <label for="name">First Name*</label>
                  <input type="text" name="name" onChange={handleInput} />
                  {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                </li>
                <li>
                  <label for="company">Company Name</label>
                  <input type="text" name="company" />
                </li>
                <li>
                  <label for="adress">street Address*</label>
                  <input type="text" name="adress" />
                  {errors.address && (
                    <p style={{ color: "red" }}>{errors.address}</p>
                  )}
                </li>
                <li>
                  <label for="floor">Apartment,Floor,etc.(optional)</label>
                  <input type="text" name="floor" />
                </li>
                <li>
                  <label for="city">Town,City*</label>
                  <input type="text" name="city" />
                  {errors.city && <p style={{ color: "red" }}>{errors.city}</p>}
                </li>
                <li>
                  <label for="name">Phone Number*</label>
                  <input type="text" name="name" />
                  {errors.number && (
                    <p style={{ color: "red" }}>{errors.number}</p>
                  )}
                </li>
                <li>
                  <label for="name">Email Address*</label>
                  <input type="text" name="name" />
                  {errors.email && (
                    <p style={{ color: "red" }}>{errors.email}</p>
                  )}
                </li>
                <li className="checkboxInput">
                  <input type="checkbox" name="save" id="save" />

                  <label for="save">
                    Save this information for faster check-out next time
                  </label>
                </li>
              </ul>
            </form>
          </div>
          <div className="CartsCheckout">
            {carts.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem data={product} myFunction={total} />;
              }
            })}
            <div className="costTotal">
              <div className="row">
                <p>Subtotal:</p>
                <p>${totalAmount}</p>
              </div>
              <div className="row">
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <div className="row">
                <p>Total:</p>
                <p>${totalAmount}</p>
              </div>
              <div className="row">
                <ul>
                  <li>
                    <input type="radio" id="bank" name="bank" />
                    <label For="bank">Bank</label>
                  </li>
                  <li>
                    <input type="radio" id="cash" name="bank" />
                    <label For="cash">Cash on delivery</label>
                  </li>
                </ul>
                <div className="typeOffCreditCarts">
                  <img src={pay1} />
                  <img src={pay2} />
                  <img src={pay3} />
                  <img src={pay4} />
                </div>
              </div>
              <div className="row">
                <input type="text" placeholder="Coupon Code" />
                <button className="btnCouponCheck">Apply Coupon</button>
              </div>
              <div className="row">
                <button className="btnOrderCheck">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
