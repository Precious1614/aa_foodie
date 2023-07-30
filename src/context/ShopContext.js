import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { SHOPS } from "../Componenets/Popularrestaurant/shop";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < SHOPS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState();

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const ContextValue = { cartItems, addToCart, removeFromCart };


  console.log(cartItems);
  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
