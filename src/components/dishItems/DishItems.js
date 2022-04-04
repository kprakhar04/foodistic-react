// react
import React from "react";

//prop-types
import PropTypes from "prop-types";

//lodash
import _keys from "lodash/keys";

// components
import Sidebar from "../../commonComponents/sidebar";
import Menu from "./components/menu";

// css
import "./dishItems.css";

const DishItems = (props) => {
  const { dishItems } = props;

  const sidebarLinks = _keys(dishItems);

  return (
    <main className="dish">
      <div className="dish-items flex">
        <Sidebar links={sidebarLinks} className="sidebar-links" />
        <Menu items={dishItems} className="menu-items" />
      </div>
    </main>
  );
};

DishItems.defaultProps = {
  dishItems: {
    itemCategory: [
      {
        name: "Item",
        currency: "INR",
        price: 250,
        description: "",
        type: "veg",
      },
    ],
  },
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
