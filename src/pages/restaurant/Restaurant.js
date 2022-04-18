// react
import React from "react";

// lodash
import _isEmpty from "lodash/isEmpty";

// redux
import { connect } from "react-redux";

// action-creator
import { fetchRestaurant } from "./actions/restaurantActions";

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

  async fetchRestaurantPageMetaData() {
    try {
      await this.props.fetchRestaurant(DEFAULT_RESTAURANT_ID);
    } catch (err) {
      this.setError();
    } finally {
      this.setAsLoaded();
    }
  }

  setAsLoaded() {
    this.setState({
      isLoading: false,
    });
  }

  handleRestaurantPageMetaError() {
    this.setState({
      hasError: true,
    });
  }

  renderSubHeader() {
    const { restaurant: { restaurantDetails } = {} } = this.props;

    return _isEmpty(restaurantDetails) ? (
      <h1 className="empty-block">Sorry, No Info Available</h1>
    ) : (
      <SubHeader restaurantDetails={restaurantDetails} />
    );
  }

  renderDishItems() {
    const { restaurant: { dishItems: { dishes } = {} } = {} } = this.props;

    return _isEmpty(dishes) ? (
      <h1 className="empty-block">
        Sorry, No Food Items Available Now, Check it After Sometime!!
      </h1>
    ) : (
      <DishItems />
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

const mapStateToProps = (state) => {
  const { restaurant } = state;
  return {
    restaurant,
  };
};

export default connect(mapStateToProps, {
  fetchRestaurant,
})(Restaurant);
