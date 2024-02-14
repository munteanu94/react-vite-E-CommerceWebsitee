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

  const getTotalCart = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = carts.find((product) => product.id === Number(item));
        total = cartItems[item] * itemInfo.price;
      }
    }
    return total;
  };
  const getTotalCartNumber = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalAmount += cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = carts.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (ItemId) => {
    setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }));
  };
  const removeFomCart = (ItemId) => {
    setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }));
  };
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFomCart,
    updateCartItemCount,
    getTotalCartAmount,
    getTotalCart,
    getTotalCartNumber,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}
