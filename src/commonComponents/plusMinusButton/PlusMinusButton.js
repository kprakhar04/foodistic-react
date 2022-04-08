// prop-types
import PropTypes from "prop-types";

// lodash
import _noop from "lodash/noop";

// css
import "./plusMinusButton.css";

const PlusMinusButton = function (props) {
  const { label, onDecrement, onIncrement, className } = props;
  return (
    <div
      className={`plus-minus-btn flex justify-content-center align-items-center ${className}`}
    >
      <span className="decrement" onClick={onDecrement}>
        -
      </span>
      <span className="label">{label}</span>
      <span className="increment" onClick={onIncrement}>
        +
      </span>
    </div>
  );
};

PlusMinusButton.defaultProps = {
  label: 0,
  onIncrement: _noop,
  onDecrement: _noop,
  className: "",
};

PlusMinusButton.propTypes = {
  label: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  className: PropTypes.string,
};

export default PlusMinusButton;
