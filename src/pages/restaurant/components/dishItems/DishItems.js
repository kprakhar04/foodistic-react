// react
import React, { useMemo } from "react";

//prop-types
import PropTypes from "prop-types";

//lodash
import _keys from "lodash/keys";

// custom-hooks
import { useCart } from "./customHooks/useCart";

//helpers
import { getTransformedDishItems } from "./helpers/dishItems.general";

// components
import Sidebar from "../../../../commonComponents/sidebar";
import Menu from "./components/menu";
import Cart from "../../../../commonComponents/cart";

// css
import "./dishItems.css";

const DishItems = ({ dishItems }) => {
  const [
    cartItems,
    onAddToCart,
    onQuantityIncrement,
    onQuantityDecrement,
    onCheckout,
  ] = useCart([]);

  const sidebarLinks = useMemo(() => {
    return _keys(dishItems);
  }, [dishItems]);

  const transformedDishItems = useMemo(() => {
    return getTransformedDishItems(dishItems);
  }, [dishItems]);

  return (
    <main className="dish flex">
      <div className="dish-items flex">
        <Sidebar links={sidebarLinks} className="sidebar-links" />
        <Menu
          items={dishItems}
          className="menu-items"
          cart={cartItems}
          onAddToCart={onAddToCart}
          onQuantityIncrement={onQuantityIncrement}
          onQuantityDecrement={onQuantityDecrement}
        />
      </div>
      <div className="dish-cart">
        <Cart
          cart={cartItems}
          products={transformedDishItems}
          onAddToCart={onAddToCart}
          onQuantityIncrement={onQuantityIncrement}
          onQuantityDecrement={onQuantityDecrement}
          onCheckout={onCheckout}
        />
      </div>
    </main>
  );
};

DishItems.defaultProps = {
  dishItems: {},
};

DishItems.propTypes = {
  dishItems: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        currency: PropTypes.string,
        price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        description: PropTypes.string,
        type: PropTypes.string,
      })
    )
  ),
};

export default DishItems;
