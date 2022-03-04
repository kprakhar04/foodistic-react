// react
import React from "react";

// api
import {
  getRestaurantDetails,
  getDishItems,
} from "../../apis/getRestaurantResource";

// constants
import {
  DEFAULT_RESTAURANT_ID,
  INITIAL_STATE,
} from "./constants/restaurantWrapper.general";

// components
import ErrorHandler from "../../commonComponents/errorHandler";
import Spinner from "../../commonComponents/loader/spinner";
import DishItems from "../dishItems";
import SubHeader from "../subHeader";

class RestaurantWrapper extends React.Component {
  state = INITIAL_STATE;

  componentDidMount() {
    this.fetchRestaurant();
  }

  fetchRestaurant() {
    getRestaurantDetails(DEFAULT_RESTAURANT_ID)
      .then(this.handleRestaurntDetailsSuccess)
      .then(this.handleDishItemsSuccess)
      .catch(this.handleFetchError)
      .finally(this.setAsLoaded);
  }

  handleRestaurntDetailsSuccess = (restaurantDetails) => {
    this.setState({
      restaurantDetails,
    });

    return getDishItems(DEFAULT_RESTAURANT_ID);
  };

  handleDishItemsSuccess = ({ dishes }) => {
    this.setState({
      dishItems: dishes,
    });
  };

  handleFetchError = (error) => {
    this.setState({
      error,
    });
  };

  setAsLoaded = () => {
    this.setState({
      isLoading: false,
    });
  };

  renderDishItems() {
    const { dishItems } = this.state;
    return dishItems ? <DishItems dishItems={dishItems} /> : null;
  }

  render() {
    const { isLoading, error, restaurantDetails } = this.state;

    if (isLoading) {
      return <Spinner text="Loading..." />;
    }

    if (!restaurantDetails && error) {
      const { message } = error;
      return <ErrorHandler message={message} />;
    }

    return (
      <>
        <SubHeader restaurantDetails={restaurantDetails} />
        {this.renderDishItems()}
      </>
    );
  }
}

export default RestaurantWrapper;
