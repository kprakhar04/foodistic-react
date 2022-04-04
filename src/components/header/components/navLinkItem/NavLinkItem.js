// prop-types
import PropTypes from "prop-types";
import Icon from "../../../../commonComponents/icon";

// css
import "./navLink.css";

const NavLinkItem = function (props) {
  const {
    item: { icon, label },
  } = props;
  return (
    <li className="flex align-items-center">
      <a href="/" className="flex align-items-center fw-700">
        <Icon src={icon} alt={label} className="icon" />
        <span>{label}</span>
      </a>
    </li>
  );
};

NavLinkItem.defaultProps = {
  icon: null,
  label: "Link #",
};

NavLinkItem.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
};

export default NavLinkItem;
