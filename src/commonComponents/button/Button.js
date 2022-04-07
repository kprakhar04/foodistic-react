// prop-types
import Proptypes from "prop-types";

// classnames
import cx from "classnames";

// css
import "./button.css";

export const TYPES = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
};

const Button = (props) => {
  const { type = TYPES.PRIMARY, label, className, ...rest } = props;

  const btnClass = cx({
    [TYPES.PRIMARY]: type === TYPES.PRIMARY,
    [TYPES.SECONDARY]: type === TYPES.SECONDARY,
  });

  return (
    <button {...rest} className={`btn ${btnClass} ${className}`}>
      {label}
    </button>
  );
};

Button.defaultProps = {
  label: "Submit",
  className: "",
  type: TYPES.PRIMARY,
};

Button.propTypes = {
  label: Proptypes.string,
  className: Proptypes.string,
  type: Proptypes.oneOf(Object.values(TYPES)),
};

export default Button;
