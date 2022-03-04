// prop-types
import PropTypes from "prop-types";

//css
import "./checkbox.css";

const Checkbox = function (props) {
  const { className, isChecked, label, htmlFor } = props;

  return (
    <div className={`${className} checkbox`}>
      <input
        className="cursor-pointer"
        type="checkbox"
        id={htmlFor}
        value={isChecked}
      />
      <label
        htmlFor={htmlFor}
        className="flex justify-content-center align-items-center"
      >
        {label}{" "}
      </label>
    </div>
  );
};

Checkbox.defaultProps = {
  className: "",
  label: "Checkbox",
  htmlFor: "checkbox",
  isChecked: false,
};

Checkbox.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  htmlFor: PropTypes.string,
  isChecked: PropTypes.bool,
};

export default Checkbox;
