// prop-types
import PropTypes from "prop-types";

//lodash
import _noop from "lodash/noop";

// classNames
import cx from "classnames";

//css
import "./linkItem.css";

const LinkItem = (props) => {
  const { label, isActive, href, isUrl, onClick, className } = props;

  const anchorClassNames = cx({
    "active-link": isActive,
  });

  const mainContent = isUrl ? (
    <a href={href} className={anchorClassNames} onClick={onClick}>
      {label}
    </a>
  ) : (
    label
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
