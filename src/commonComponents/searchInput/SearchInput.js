// prop-types
import PropTypes from "prop-types";

// icons
import search from "../../assets/icons/search.svg";
import Icon from "../icon";

// css
import "./searchInput.css";

const SearchInput = function (props) {
  const { className, placeholder, icon } = props;
  return (
    <div className={`${className} search`}>
      <Icon src={icon} alt={placeholder} className="icon" />
      <input type="text" className="search-input" placeholder={placeholder} />
    </div>
  );
};

SearchInput.defaultProps = {
  className: "",
  placeholder: "Search...",
  icon: search,
};

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
};

export default SearchInput;
