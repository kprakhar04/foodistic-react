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
    Promise.all([
      getRestaurantDetails(DEFAULT_RESTAURANT_ID),
      getDishItems(DEFAULT_RESTAURANT_ID),
    ])
      .then(this.handleRestaurntSuccess)
      .catch(this.handleFetchError)
      .finally(this.setAsLoaded);
  }

  handleRestaurntSuccess = ([restaurantDetails, dishItems]) => {
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

  renderSubHeader() {
    const { restaurantDetails } = this.state;

    return _isEmpty(restaurantDetails) ? (
      <h1 className="empty-block">Sorry, No Info Available</h1>
    ) : (
      <SubHeader restaurantDetails={restaurantDetails} />
    );
  }

  renderDishItems() {
    const { dishItems } = this.state;

    return _isEmpty(dishItems) ? (
      <h1 className="empty-block">
        Sorry, No Food Items Available Now, Check it After Sometime!!
      </h1>
    ) : (
      <DishItems dishItems={dishItems} />
    );
  }

  render() {
    const { isLoading, hasError } = this.state;

    if (isLoading) {
      return <Spinner text="Loading..." />;
    }

    if (hasError) {
      return <ErrorHandler />;
    }

    return (
      <>
        {this.renderSubHeader()}
        {this.renderDishItems()}
      </>
    );
  }
}

export default Restaurant;
