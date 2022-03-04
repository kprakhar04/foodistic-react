// react
import React from "react";

// prop-types
import PropTypes from "prop-types";

// reselect
import { defaultMemoize } from "reselect";

//helpers
import breadCrumbConfig from "./helpers/subHeader.breadCrumbConfig";

//constants
import restaurantReader from "./readers/restaurantReader";

// components
import BreadCrumb from "../../commonComponents/breadCrumb";
import Header from "./components/header";
import Placeholder from "./components/placeholder";
import MenuFilter from "./components/menuFilter";
import Offers from "./components/offers";

// css
import "./subHeader.css";

const renderPlaceholder = ({
  ratingIcon,
  ratingValue,
  ratingCount,
  deliveryTime,
  cost,
  count,
}) => {
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

const getBreadCrumbConfig = defaultMemoize(breadCrumbConfig);

const SubHeader = (props) => {
  const { restaurantDetails } = props;

  const thumbnail = restaurantReader.thumbnail(restaurantDetails);
  const name = restaurantReader.name(restaurantDetails);
  const category = restaurantReader.category(restaurantDetails);
  const street = restaurantReader.street(restaurantDetails);
  const locality = restaurantReader.locality(restaurantDetails);
  const city = restaurantReader.city(restaurantDetails);
  const offers = restaurantReader.offers(restaurantDetails);
  const ratingCount = restaurantReader.ratingCount(restaurantDetails);
  const ratingValue = restaurantReader.ratingValue(restaurantDetails);
  const deliveryTime = restaurantReader.deliveryTime(restaurantDetails);
  const cost = restaurantReader.cost(restaurantDetails);
  const count = restaurantReader.count(restaurantDetails);

  const crumbs = getBreadCrumbConfig(city, locality, name);

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
            additionalInfo={{
              ratingCount,
              ratingValue,
              deliveryTime,
              cost,
              count,
            }}
            renderAdditionalInfo={renderPlaceholder}
          />
          <Offers offers={offers} />
        </div>
        <MenuFilter />
      </section>
    </>
  );
};

SubHeader.defaultProps = {
  thumbnail: "Thumbnail",
  name: "Restaurnt Name",
  category: "Food category",
  street: "street",
  locality: "locality",
  city: "city",
  offers: [
    {
      discount: "UPTO 25% OFF ON XYZ CARDS",
      coupon: "FOODIE",
    },
  ],
  ratingCount: 20,
  ratingValue: 4.1,
  deliveryTime: 40,
  cost: 500,
  count: "two",
};

SubHeader.propTypes = {
  restaurantDetails: PropTypes.shape({
    thumbnail: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    street: PropTypes.string,
    locality: PropTypes.string,
    city: PropTypes.string,
    offers: PropTypes.arrayOf(
      PropTypes.shape({
        discount: PropTypes.string,
        coupon: PropTypes.string,
      })
    ),
  }),
  ratingCount: PropTypes.number,
  ratingValue: PropTypes.number,
  deliveryTime: PropTypes.number,
  cost: PropTypes.number,
  count: PropTypes.string,
};

export default SubHeader;
