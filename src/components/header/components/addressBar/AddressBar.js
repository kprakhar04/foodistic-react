// prop-types
import PropTypes from "prop-types";

// icons
import downArrow from "../../../../assets/icons/down-arrow.svg";

// css
import "./addressBar.css";

const AddressBar = function (props) {
  const {
    address: { area, district, state, country },
  } = props;
  return (
    <div className="address flex cursor-pointer">
      <span className="area fw-700">{area}</span>
      <span className="district">
        {district}, {state}, {country}
      </span>
      <span className="icon primary-color-filter">
        <img src={downArrow} alt="down-arrow" />
      </span>
    </div>
  );
};

AddressBar.defaultProps = {
  area: "Area",
  district: "District",
  state: "State",
  country: "Country",
};

AddressBar.propTypes = {
  area: PropTypes.string,
  district: PropTypes.string,
  state: PropTypes.string,
  country: PropTypes.string,
};

export default AddressBar;
