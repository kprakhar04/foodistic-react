// react
import React from "react";

// lodash
import _isEmpty from "lodash/isEmpty";

// api
import { getDishItems } from "../../apis/getDishItems";
import { getRestaurantDetails } from "../../apis/getRestaurantDetails";

// constants
import {
  DEFAULT_RESTAURANT_ID,
  INITIAL_STATE,
} from "./constants/restaurant.general";

// components
import ErrorHandler from "../../commonComponents/errorHandler";
import Spinner from "../../commonComponents/spinner";
import DishItems from "./components/dishItems";
import SubHeader from "./components/subHeader";

class Restaurant extends React.Component {
  state = INITIAL_STATE;

  componentDidMount() {
    this.fetchRestaurantPageMetaData();
  }

  fetchRestaurantPageMetaData() {
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
    const dishes = dishItemsRes?.value?.dishes;

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

  render() {
    const { isLoading, hasError, restaurantDetails, dishItems } = this.state;

    if (isLoading) {
      return <Spinner text="Loading..." />;
    }

    if (!restaurantDetails || hasError) {
      return <ErrorHandler />;
    }

    return (
      <>
        {_isEmpty(restaurantDetails) ? (
          <h1 className="empty-block">Sorry, No Info Available</h1>
        ) : (
          <SubHeader restaurantDetails={restaurantDetails} />
        )}

        {_isEmpty(dishItems) ? (
          <h1 className="empty-block">
            Sorry, No Food Items Available Now, Check it After Sometime!!
          </h1>
        ) : (
          <DishItems dishItems={dishItems} />
        )}
      </>
    );
  }
}

export default Restaurant;
