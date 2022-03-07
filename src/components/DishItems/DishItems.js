// react
import React from "react";

//lodash
import _keys from "lodash/keys";

// constants(INITILAL_STATE)
import {
  DEFAULT_RESTAURANT_ID,
  INITIAL_STATE,
} from "./constants/dishItems.general";

// helpers
import {
  filterItemsOnQuantity,
  findAItemInItemsList,
  updateItemQuantity,
  updateItemsList,
} from "./helpers/dish.cart.helpers";

// api helpers
import { getDishItems } from "../../api/getDishItems";

// components
import Loader from "../../commonComponents/Loader";
import ErrorHandler from "../../commonComponents/ErrorHandler";
import Sidebar from "../../commonComponents/Sidebar";
import Menu from "./Dishes/Menu";
import Cart from "../Cart";

// css
import "./DishItems.css";

class DishItems extends React.Component {
  state = INITIAL_STATE;

  componentDidMount() {
    this.fetchDishItems();
  }

  fetchDishItems() {
    getDishItems(DEFAULT_RESTAURANT_ID)
      .then(this.setDishItems)
      .catch(this.handleDishItemsError)
      .finally(this.setAsLoaded);
  }

  setDishItems = ({ dishes }) => {
    this.setState({
      dishMenu: {
        dishItems: dishes,
        itemQuantityPerItemId: {},
      },
    });
  };

  handleDishItemsError = (err) => {
    this.setState({
      error: {
        message: err.toString(),
      },
    });
  };

  setAsLoaded = () => {
    this.setState({
      isLoading: false,
    });
  };

  handleCartChange = (itemId, quantity = 1, itemCategory) => {
    const {
      cart: { items },
      dishMenu,
    } = this.state;
    const { itemQuantityPerItemId, dishItems } = dishMenu;

    let itemToUpdate,
      isNewItem = false;

    if (itemCategory) {
      const itemsInACategory = dishItems[itemCategory];
      itemToUpdate = findAItemInItemsList(itemsInACategory, itemId);
      isNewItem = true;
    } else {
      itemToUpdate = findAItemInItemsList(items, itemId);
    }

    const updatedItem = updateItemQuantity(itemToUpdate, quantity);

    const updatedCartItems = updateItemsList(items, updatedItem, isNewItem);

    const filteredCartItems = filterItemsOnQuantity(updatedCartItems);

    this.setState({
      cart: {
        items: filteredCartItems,
      },
      dishMenu: {
        dishItems,
        itemQuantityPerItemId: {
          ...itemQuantityPerItemId,
          [itemId]: updatedItem.quantity,
        },
      },
    });
  };

  handleCheckout = () => {
    const { dishMenu } = this.state;
    this.setState({
      ...INITIAL_STATE,
      dishMenu: {
        ...dishMenu,
        itemQuantityPerItemId: {},
      },
      isLoading: false,
    });
  };

  render() {
    const { isLoading, error, dishMenu, cart } = this.state;

    if (isLoading) {
      return <Loader.Spinner text="Loading..." />;
    }

    if (error) {
      const { message, statusCode } = error;
      return <ErrorHandler message={message} statusCode={statusCode} />;
    }

    const { dishItems, itemQuantityPerItemId } = dishMenu;

    const sidebarLinks = _keys(dishItems);

    return (
      <main className="dish flex justify-content-space-between">
        <div className="dish-items flex justify-content-center">
          <Sidebar items={sidebarLinks} />
          <Menu
            items={dishItems}
            itemQuantityPerItemId={itemQuantityPerItemId}
            onCartChange={this.handleCartChange}
          />
        </div>
        <div className="dish-cart">
          <Cart
            cart={cart}
            onCheckout={this.handleCheckout}
            onCartChange={this.handleCartChange}
          />
        </div>
      </main>
    );
  }
}
export default DishItems;
