import downArrow from "../../assets/icons/down-arrow.svg";
import "./AddressBar.css";
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

export default AddressBar;
