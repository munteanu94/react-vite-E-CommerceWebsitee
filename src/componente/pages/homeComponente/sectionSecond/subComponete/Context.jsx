import React, { createContext, useState } from "react";
import { carts } from "./ListCart.js";
export const ShopContext = createContext(null);

function getDefaultCart() {
  let cart = {};
  for (let i = 1; i < carts.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}

export default function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const addToCart = (ItemId) => {
    setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }));
  };
  const removeFomCart = (ItemId) => {
    setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }));
  };

  const contextValue = { cartItems, addToCart, removeFomCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}
