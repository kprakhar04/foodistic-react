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

export const useCart = (initialState, onClearCart) => {
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
    onClearCart(cartItems);
  };

  return [cartItems, onCartChange, onCheckout];
};
