// prop-types
import PropTypes from "prop-types";

// lodash
import _noop from "lodash/noop";

// css
import "./plusMinusButton.css";

const PlusMinusButton = function (props) {
  const { quantity, onDecrementClick, onIncrementClick, className, id } = props;
  return (
    <div
      className={`plus-minus-btn flex justify-content-center align-items-center ${className}`}
    >
      <span id={id} className="decrement" onClick={onDecrementClick}>
        -
      </span>
      <span className="quantity">{quantity}</span>
      <span id={id} className="increment" onClick={onIncrementClick}>
        +
      </span>
    </div>
  );
};

PlusMinusButton.defaultProps = {
  quantity: 0,
  onIncrement: _noop,
  onDecrement: _noop,
  className: "",
};

PlusMinusButton.propTypes = {
  quantity: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  className: PropTypes.string,
};

export default PlusMinusButton;
