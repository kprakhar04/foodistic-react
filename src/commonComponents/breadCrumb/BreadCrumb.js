// prop-types
import PropTypes from "prop-types";

// component
import LinkItemList from "./components/linkItemList";

// css
import "./breadCrumb.css";

const BreadCrumb = function (props) {
  const { items, className } = props;
  return (
    <section className={`bread-crumb flex align-items-center ${className}`}>
      <LinkItemList items={items} />
    </section>
  );
};

BreadCrumb.defaultProps = {
  items: [
    {
      text: "#Link",
      path: "#",
      isUrl: true,
    },
  ],
  className: "",
};

BreadCrumb.propsTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      path: PropTypes.string,
      isUrl: PropTypes.bool,
    })
  ),
  className: PropTypes.string,
};

export default BreadCrumb;
