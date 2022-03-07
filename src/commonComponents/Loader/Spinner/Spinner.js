// prop-types
import PropTypes from "prop-types";

// css
import "./Spinner.css";

const Spinner = ({ text, className }) => {
  return (
    <div className={`spinner-container ${className}`}>
      <div className="spinner">
        <div></div>
        <div></div>
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
