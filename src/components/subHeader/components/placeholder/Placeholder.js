// prop-types
import PropTypes from "prop-types";

// components
import Icon from "../../../../commonComponents/icon";

// css
import "./placeholder.css";

const Placeholder = function (props) {
  const { icon, title, subtitle } = props;

  return (
    <div className="restaurant-placeholder">
      <div>
        <Icon src={icon} alt={title} className="icon" />
        <span>{title}</span>
      </div>
      <div>
        <span>{subtitle}</span>
      </div>
    </div>
  );
};

Placeholder.defaultProps = {
  icon: undefined,
  title: "title",
  subtitle: "sub-title",
};

Placeholder.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  subtitle: PropTypes.string,
};

export default Placeholder;
