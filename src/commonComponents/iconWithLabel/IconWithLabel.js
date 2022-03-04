// prop-types
import PropTypes from "prop-types";

// components
import Icon from "../icon";

//icons
import favorite from "../../assets/icons/favorite.svg";

// css
import "./iconWithLabel.css";

const IconWithLabel = function (props) {
  const { className, icon, label } = props;
  return (
    <div className={`${className} icon-with-label`}>
      <Icon src={icon} alt={label} className="icon" />
      <span>{label}</span>
    </div>
  );
};

IconWithLabel.defaultProps = {
  label: "Favorite",
  icon: favorite,
  className: "",
};

IconWithLabel.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
};

export default IconWithLabel;
