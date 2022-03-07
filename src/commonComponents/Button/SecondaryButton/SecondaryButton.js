// prop-types
import PropTypes from "prop-types";

// lodash
import _noop from "lodash/noop";

// css
import "./SecondaryButton.css";

const SecondaryButton = ({ btnText, className, handleClick }) => {
  return (
    <div className={`checkout-btn ${className}`}>
      <button onClick={handleClick} className="btn flex justify-content-center">
        {btnText}
      </button>
    </div>
  );
};

SecondaryButton.defaultProps = {
  btnText: "Button",
  handleClick: _noop,
  className: "",
};
SecondaryButton.propTypes = {
  btnText: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default SecondaryButton;
