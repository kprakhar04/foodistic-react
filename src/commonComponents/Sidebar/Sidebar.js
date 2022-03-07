// prop-types
import PropTypes from "prop-types";

//lodash
import _map from "lodash/map";
import _startCase from "lodash/startCase";

// css
import "./Sidebar.css";

const renderLink = (item) => {
  return (
    <a key={item} href={`#${item}`}>
      {_startCase(item)}
    </a>
  );
};

const renderLinks = (items) => {
  return _map(items, renderLink);
};

const Sidebar = function (props) {
  const { items, className } = props;

  return (
    <div className={`sidebar-nav-links ${className}`}>{renderLinks(items)}</div>
  );
};

Sidebar.defaultProps = {
  items: ["Link 1", "Link 2", "Link 3"],
  className: "",
};

Sidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};

export default Sidebar;
