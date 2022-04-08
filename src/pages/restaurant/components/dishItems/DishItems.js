// react
import React, { useMemo } from "react";

//prop-types
import PropTypes from "prop-types";

//lodash
import _keys from "lodash/keys";
import _isEmpty from "lodash/isEmpty";

// custom-hooks
import { useCart } from "./customHooks/useCart";

// helpers

// constants
import { EMPTY_CART_DESCRIPTION } from "./constants/dishItems.general";

// components
import Sidebar from "../../../../commonComponents/sidebar";
import Menu from "./components/menu";
import IconWithLabel from "../../../../commonComponents/iconWithLabel";
import Cart from "../../../../commonComponents/cart";

// icons
import cartEmpty from "../../../../assets/images/cart_empty.png";

// css
import "./dishItems.css";

const DishItems = ({ dishItems }) => {
  const [cartItems, onCartChange, onCheckout] = useCart([]);

  const renderCartItems = () => {
    const isCartEmpty = _isEmpty(cartItems);

    if (isCartEmpty) {
      return (
        <div className="cart-empty">
          <h3>Cart Empty</h3>
          <IconWithLabel
            className="cart-empty-icon-label"
            icon={cartEmpty}
            label={EMPTY_CART_DESCRIPTION}
          />
        </div>
      );
    }
    return (
      <Cart
        cart={cartItems}
        products={dishItems}
        onCartChange={onCartChange}
        onCheckout={onCheckout}
      />
    );
  };

  const sidebarLinks = useMemo(() => {
    return _keys(dishItems);
  }, [dishItems]);

  return (
    <main className="dish flex">
      <div className="dish-items flex">
        <Sidebar links={sidebarLinks} className="sidebar-links" />
        <Menu
          items={dishItems}
          className="menu-items"
          cart={cartItems}
          onCartChange={onCartChange}
        />
      </div>
      <div className="dish-cart">{renderCartItems()}</div>
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
