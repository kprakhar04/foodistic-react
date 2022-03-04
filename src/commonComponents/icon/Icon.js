// prop-types
import PropTypes from "prop-types";

const renderIcon = (src, alt, className) => {
  return src ? <img className={`${className}`} src={src} alt={alt} /> : null;
};

const Icon = (props) => {
  const { src, alt, className } = props;

  return renderIcon(src, alt, className);
};

Icon.defaultProps = {
  src: "",
  alt: "image title",
  className: "icon",
};

Icon.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default Icon;
