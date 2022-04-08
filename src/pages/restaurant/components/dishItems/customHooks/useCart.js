// react
import { useState } from "react";

// immer
import produce from "immer";

// constants
import {
  CART,
  DECREMENT_AMOUNT,
  INCREMENT_AMOUNT,
} from "../constants/dishItems.general";

// helpers
import { saveItemsToLocalStorage } from "../../../../../utility/saveItemsToLocalStorage";
import {
  findItemById,
  updateAndFilterItem,
  updateCartIfQuantityIsZero,
  updateCartItems,
} from "../helpers/dishItems.general";

export const useCart = (initialState) => {
  const [cartItems, setCartItems] = useState(initialState);

  const onAddToCart = (event) => {
    const {
      target: { id },
    } = event;

    const itemToUpdate = findItemById(cartItems, id);

    const updatedItem = updateAndFilterItem(itemToUpdate, id, INCREMENT_AMOUNT);

    const updatedCart = produce(cartItems, updateCartItems(updatedItem));

    setCartItems(updatedCart);
  };

  const onQuantityIncrement = (event) => {
    const {
      target: { id },
    } = event;

    const itemToUpdate = findItemById(cartItems, id);

    const updatedItem = updateAndFilterItem(itemToUpdate, id, INCREMENT_AMOUNT);

    const updatedCart = produce(cartItems, updateCartItems(updatedItem));

    setCartItems(updatedCart);
  };

  const onQuantityDecrement = (event) => {
    const {
      target: { id },
    } = event;

    const itemToUpdate = findItemById(cartItems, id);

    const updatedItem = updateAndFilterItem(itemToUpdate, id, DECREMENT_AMOUNT);

    if (updatedItem) {
      const updatedCart = produce(cartItems, updateCartItems(updatedItem));
      setCartItems(updatedCart);
    } else {
      const updatedCart = produce(
        cartItems,
        updateCartIfQuantityIsZero(itemToUpdate)
      );
      setCartItems(updatedCart);
    }
  };

  const onCheckout = () => {
    saveItemsToLocalStorage(CART, cartItems);
    setCartItems([]);
    alert("Cart items has been saved successfully!!");
  };

  return [
    cartItems,
    onAddToCart,
    onQuantityIncrement,
    onQuantityDecrement,
    onCheckout,
  ];
};
