// prop-types
import PropTypes from "prop-types";

// css
import "./errorHandler.css";

const ErrorHandler = (props) => {
  const { message, statusCode, className } = props;

  return (
    <div className={`error-container ${className}`}>
      <h1>Oops!</h1>
      <h5>{message}</h5>
      <p>Error Code: {statusCode}</p>
    </div>
  );
};

ErrorHandler.defaultProps = {
  message: "Something went wrong....try again!!",
  statusCode: 500,
  className: "",
};

ErrorHandler.propTypes = {
  message: PropTypes.string,
  statusCode: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
};

export default ErrorHandler;
