// prop-types
import Proptypes from "prop-types";

// lodash
import _noop from "lodash/noop";

// css
import "./primaryButton.css";

const PrimaryButton = (props) => {
  const { btnText, handleClick, className } = props;
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
