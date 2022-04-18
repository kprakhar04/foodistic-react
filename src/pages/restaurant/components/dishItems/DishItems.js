// react
import React, { useMemo } from "react";

//prop-types
import PropTypes from "prop-types";

// redux
import { connect } from "react-redux";

// react-router-dom
import { useNavigate } from "react-router-dom";

//lodash
import _keys from "lodash/keys";

// custom-hooks
import { useCart } from "./customHooks/useCart";

// helpers
import { getTransformedDishItems } from "./helpers/dishItems.general";
// constants
import { CHECKOUT } from "../../../../constants/routes";

// components
import Sidebar from "../../../../commonComponents/sidebar";
import Menu from "./components/menu";
import Cart from "../../../../commonComponents/cart";

// css
import "./dishItems.css";
import { postCartItems } from "../../../../apis/postCartItems";

const DishItems = ({ dishItems }) => {
  const navigate = useNavigate();

  const onPostCartItems = (cartItems) => {
    postCartItems(cartItems)
      .then(handlePostCartItemsSuccess)
      .catch(handlePostCartItemsError);
  };

  const [
    cartItems,
    onAddToCart,
    onQuantityIncrement,
    onQuantityDecrement,
    onCheckout,
  ] = useCart([], onPostCartItems);

  const handlePostCartItemsSuccess = () => {
    navigate(CHECKOUT);
  };
  const handlePostCartItemsError = (err) => {
    console.log(err);
  };

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
  dishItems: PropTypes.object,
};

const mapStateToProps = (state) => {
  const { restaurant: { dishItems: { dishes } = {} } = {} } = state;
  return {
    dishItems: dishes,
  };
};

export default connect(mapStateToProps)(DishItems);
