// prop-types
import PropTypes from "prop-types";

// css
import "./spinner.css";

const Spinner = ({ text, className }) => {
  return (
    <div className={`spinner-container ${className}`}>
      <div className="spinner">
        <div></div>
        <div className="spinner-last-child"></div>
      </div>
      <h1>{text}</h1>
    </div>
  );
};

Spinner.defaultProps = {
  text: "Loading...",
  className: "",
};

Spinner.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export default Spinner;
