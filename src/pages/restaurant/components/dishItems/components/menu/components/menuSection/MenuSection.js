// prop-types
import PropTypes from "prop-types";

// components
import MenuItemList from "../menuItemList";
import { getSubHeading } from "./menuSection.helpers";

// helpers
import { sanitizeText } from "../../../../../../../../utility/sanitizeText";

// css
import "./menuSection.css";

const MenuSection = (props) => {
  const { heading, itemList } = props;

  const subHeading = getSubHeading(itemList.length);

  return (
    <div className="menu-section" id={sanitizeText(heading)}>
      <h2>{heading}</h2>
      <p className="sub-title">{subHeading}</p>
      <MenuItemList itemList={itemList} />
    </div>
  );
};

MenuSection.defaultProps = {
  heading: "Heading",
  itemList: {},
};

MenuSection.propTypes = {
  heading: PropTypes.string,
  itemList: PropTypes.arrayOf(PropTypes.object),
};

export default MenuSection;
