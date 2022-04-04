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
} from "./constants/restaurant.general";

// components
import ErrorHandler from "../../commonComponents/errorHandler";
import Spinner from "../../commonComponents/loader/spinner";
import DishItems from "../../components/dishItems";
import SubHeader from "../../components/subHeader";

class Restaurant extends React.Component {
  state = INITIAL_STATE;

  componentDidMount() {
    this.fetchRestaurant();
  }

  fetchRestaurant() {
    Promise.allSettled([
      getRestaurantDetails(DEFAULT_RESTAURANT_ID),
      getDishItems(DEFAULT_RESTAURANT_ID),
    ])
      .then(this.handleRestaurntSuccess)
      .catch(this.handleFetchError)
      .finally(this.setAsLoaded);
  }

  handleRestaurntSuccess = ([restaurantDetailsRes, dishItemsRes]) => {
    const restaurantDetails = restaurantDetailsRes?.value;
    const dishItems = dishItemsRes?.value;

    const dishes = dishItems?.dishes;

    this.setState({
      restaurantDetails,
      dishItems: dishes,
    });
  };

  handleFetchError = () => {
    this.setState({
      hasError: true,
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
    const { isLoading, hasError, restaurantDetails } = this.state;

    if (isLoading) {
      return <Spinner text="Loading..." />;
    }

    if (!restaurantDetails || hasError) {
      return <ErrorHandler />;
    }

    return (
      <>
        <SubHeader restaurantDetails={restaurantDetails} />
        {this.renderDishItems()}
      </>
    );
  }
}

export default Restaurant;
