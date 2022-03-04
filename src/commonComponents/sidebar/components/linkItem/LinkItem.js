// prop-types
import PropTypes from "prop-types";

//lodash
import _startCase from "lodash/startCase";

// css
import "./linkItem.css";

const LinkItem = (props) => {
  const { label, isActive, url } = props;

  const activeId = isActive ? "active-link" : undefined;

  return (
    <a href={`#${url}`} id={`${activeId}`}>
      {_startCase(label)}
    </a>
  );
};

LinkItem.defaultProps = {
  url: "default",
  isActive: false,
  label: "default",
};

LinkItem.propTypes = {
  url: PropTypes.string,
  isActive: PropTypes.bool,
  label: PropTypes.string,
};

export default LinkItem;
