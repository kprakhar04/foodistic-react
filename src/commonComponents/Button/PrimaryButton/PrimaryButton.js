// prop-types
import Proptypes from "prop-types";

// lodash
import _noop from "lodash/noop";

// css
import "./PrimaryButton.css";

const PrimaryButton = ({ btnText, handleClick, className }) => {
  return (
    <div>
      <button onClick={handleClick} className={`btn ${className}`}>
        {btnText}
      </button>
    </div>
  );
};

PrimaryButton.defaultProps = {
  btnText: "Submit",
  handleClick: _noop,
  className: "",
};

PrimaryButton.propTypes = {
  btnText: Proptypes.string,
  handleClick: Proptypes.func,
  className: Proptypes.string,
};

export default PrimaryButton;
