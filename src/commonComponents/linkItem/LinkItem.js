// prop-types
import PropTypes from "prop-types";

//lodash
import _noop from "lodash/noop";
import _startCase from "lodash/startCase";

// constants
import { ACTIVE_CLASS } from "./constants/linkItem.general";

//css
import "./linkItem.css";

const LinkItem = (props) => {
  const { label, isActive, href, isUrl, onClick, className } = props;

  const activeClass = isActive ? ACTIVE_CLASS : undefined;

  const mainContent = isUrl ? (
    <a href={href} className={activeClass} onClick={onClick}>
      {_startCase(label)}
    </a>
  ) : (
    _startCase(label)
  );

  return <span className={`link-item ${className}`}>{mainContent}</span>;
};

LinkItem.defaultProps = {
  href: "default",
  isActive: false,
  label: "default",
  onClick: _noop,
  isUrl: true,
  className: "",
};

LinkItem.propTypes = {
  href: PropTypes.string,
  isActive: PropTypes.bool,
  label: PropTypes.string,
  isUrl: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
export default LinkItem;
