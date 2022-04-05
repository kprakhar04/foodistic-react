// react
import React from "react";

//prop-types
import PropTypes from "prop-types";

//lodash
import _isEmpty from "lodash/isEmpty";
import _keys from "lodash/keys";

// components
import Sidebar from "../../../../commonComponents/sidebar";
import Menu from "./components/menu";

// css
import "./dishItems.css";

const DishItems = (props) => {
  const { dishItems } = props;

  if (_isEmpty(dishItems)) {
    return (
      <h1 className="empty-block">
        Sorry, No Food Items Available Now, Check it After Sometime!!
      </h1>
    );
  }

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
