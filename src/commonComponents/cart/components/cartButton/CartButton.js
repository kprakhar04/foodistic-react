// Prop-Types
import PropTypes from "prop-types";

// lodash
import _noop from "lodash/noop";

// components
import Button, { TYPES } from "../../../button";
import PlusMinusButton from "../../../plusMinusButton";

const CartButton = (props) => {
  const {
    id,
    quantity,
    onAddToCart,
    onQuantityIncrement,
    onQuantityDecrement,
  } = props;

  if (!quantity) {
    return (
      <Button
        id={id}
        label="Add"
        type={TYPES.SECONDARY}
        onClick={onAddToCart}
      />
    );
  }

  return (
    <PlusMinusButton
      id={id}
      quantity={quantity}
      onIncrementClick={onQuantityIncrement}
      onDecrementClick={onQuantityDecrement}
    />
  );
};

CartButton.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  quantity: PropTypes.number,
  onCartChange: PropTypes.func,
};

CartButton.defaultProps = {
  id: undefined,
  quantity: 0,
  onCartChange: _noop,
};

export default CartButton;
