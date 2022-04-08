// Prop-Types
import PropTypes from "prop-types";

// lodash
import _noop from "lodash/noop";

// constants
import {
  DECREMENT_AMOUNT,
  INCREMENT_AMOUNT,
} from "./constants/cartButton.general";

// components
import Button, { TYPES } from "../../../button";
import PlusMinusButton from "../../../plusMinusButton";

const CartButton = (props) => {
  const { id, quantity, onCartChange } = props;

  const onAddToCart = () => {
    onCartChange(id, INCREMENT_AMOUNT);
  };

  const onDecrementFromCart = () => {
    onCartChange(id, DECREMENT_AMOUNT);
  };

  if (!quantity) {
    return <Button label="Add" type={TYPES.SECONDARY} onClick={onAddToCart} />;
  }

  return (
    <PlusMinusButton
      label={quantity}
      onIncrement={onAddToCart}
      onDecrement={onDecrementFromCart}
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
