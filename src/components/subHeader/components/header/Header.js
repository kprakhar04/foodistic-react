// prop-types
import PropTypes from "prop-types";

//lodash
import _noop from "lodash/noop";

// icons
import ratingIcon from "../../../../assets/icons/star.svg";

// css
import "./header.css";

const Header = (props) => {
  const { name, category, street, locality, renderAdditionalInfo } = props;

  return (
    <div className="restaurant-about flex-column justify-content-center">
      <h3>{name}</h3>
      <p>
        <span>Closes Soon</span>
        &nbsp;
        <span>{category}</span>
      </p>
      <p>
        {street}, {locality}
      </p>
      <div className="flex align-items-center">
        {renderAdditionalInfo(ratingIcon)}
      </div>
    </div>
  );
};

Header.defaultProps = {
  name: "Restaurant Name",
  category: "Indian",
  street: "Street",
  locality: "Locality",
  renderFooter: _noop,
};

Header.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  street: PropTypes.string,
  locality: PropTypes.string,
  renderFooter: PropTypes.func,
};

export default Header;
