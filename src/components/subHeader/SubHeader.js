import React from "react";

// subheader general
import {
  DEFAULT_RESTAURANT_ID,
  INITIAL_STATE,
} from "./constants/subHeader.general";

//helpers
import breadCrumbConfig from "./helpers/subHeader.breadCrumbConfig";

//constants
import restaurantReader from "./readers/restaurantReader";

// api methods
import { getRestaurantDetails } from "../../apis/getRestaurantDetails";

// components
import Spinner from "../../commonComponents/spinner";
import ErrorHandler from "../../commonComponents/errorHandler";
import BreadCrumb from "../../commonComponents/breadCrumb";
import Header from "./components/header";
import Placeholder from "./components/placeholder";
import MenuFilter from "./components/menuFilter";
import Offers from "./components/offers";

// icon
import ratingIcon from "../../assets/icons/star.svg";

// css
import "./subHeader.css";
import { defaultMemoize } from "reselect";

class SubHeader extends React.Component {
  state = INITIAL_STATE;
  getBreadCrumbConfig = defaultMemoize(breadCrumbConfig);

  componentDidMount() {
    this.fetchRestaurantDetails();
  }

  fetchRestaurantDetails() {
    getRestaurantDetails(DEFAULT_RESTAURANT_ID)
      .then(this.setRestaurantDetails)
      .catch(this.handleRestaurantDetailsError)
      .finally(this.setAsLoaded);
  }

  setRestaurantDetails = (restaurantDetails) => {
    this.setState({
      restaurantDetails: restaurantDetails,
    });
  };

  handleRestaurantDetailsError = () => {
    this.setState({
      errors: {
        statusCode: 500,
      },
    });
  };

  setAsLoaded = () => {
    this.setState({
      isLoading: false,
    });
  };

  renderPlaceholder = () => {
    const { restaurantDetails } = this.state;
    const ratingCount = restaurantReader.ratingCount(restaurantDetails);
    const ratingValue = restaurantReader.ratingValue(restaurantDetails);
    const deliveryTime = restaurantReader.deliveryTime(restaurantDetails);
    const cost = restaurantReader.cost(restaurantDetails);
    const count = restaurantReader.count(restaurantDetails);
    return (
      <>
        <Placeholder
          icon={ratingIcon}
          title={ratingValue.toFixed(1)}
          subtitle={`${ratingCount}+ ratings`}
        />
        <Placeholder title={`${deliveryTime} mins`} subtitle="Delivery Time" />
        <Placeholder title={cost} subtitle={`Cost for ${count}`} />
      </>
    );
  };

  render() {
    const { isLoading, errors, restaurantDetails } = this.state;

    if (isLoading) {
      return <Spinner text="Loading..." />;
    }

    if (errors) {
      const { message, statusCode } = errors;
      return <ErrorHandler message={message} statusCode={statusCode} />;
    }

    const thumbnail = restaurantReader.thumbnail(restaurantDetails);
    const name = restaurantReader.name(restaurantDetails);
    const category = restaurantReader.category(restaurantDetails);
    const street = restaurantReader.street(restaurantDetails);
    const locality = restaurantReader.locality(restaurantDetails);
    const city = restaurantReader.city(restaurantDetails);
    const offers = restaurantReader.offers(restaurantDetails);

    const crumbs = this.getBreadCrumbConfig(city, locality, name);

    return (
      <>
        <BreadCrumb items={crumbs} />
        <section className="restaurant">
          <div className="restaurant-info flex justify-content-space-around align-items-center">
            <img src={thumbnail} alt="thumbnail" className="thumbnail" />
            <Header
              name={name}
              category={category}
              street={street}
              locality={locality}
              renderAdditionalInfo={this.renderPlaceholder}
            />
            <Offers offers={offers} />
          </div>
          <MenuFilter />
        </section>
      </>
    );
  }
}
export default SubHeader;
