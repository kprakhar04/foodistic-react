// react
import { useState } from "react";

// constants
import { CART } from "../constants/dishItems.general";

// helpers
import { saveCartItems } from "../../../../../utility/saveCartItems";
import {
  findItemById,
  updateAndFilterCart,
} from "../helpers/dishItems.general";

export const useCart = (initialState) => {
  const [cartItems, setCartItems] = useState(initialState);

  const onCartChange = (id, newQuantity = 0) => {
    const isItemFound = findItemById(cartItems, id);

    const updatedCart = updateAndFilterCart(
      isItemFound,
      cartItems,
      id,
      newQuantity
    );

    setCartItems(updatedCart);
  };

  const onCheckout = () => {
    saveCartItems(CART, cartItems);
    setCartItems([]);
    alert("Cart items has been saved successfully!!");
  };

  return [cartItems, onCartChange, onCheckout];
};
