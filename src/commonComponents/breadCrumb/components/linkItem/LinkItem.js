// prop-types
import PropTypes from "prop-types";

//css
import "./linkItem.css";

const LinkItem = function (props) {
  const {
    item: { text, path, isUrl },
  } = props;

  const mainContent = isUrl ? <a href={path}>{text}</a> : text;

  return <span>{mainContent}</span>;
};

LinkItem.defaultProps = {
  text: "#Link",
  path: "#",
  isUrl: true,
};

LinkItem.propTypes = {
  item: PropTypes.shape({
    text: PropTypes.string,
    path: PropTypes.string,
    isUrl: PropTypes.bool,
  }),
};
export default LinkItem;
