// prop-types
import PropTypes from "prop-types";

// components
import MenuItemList from "../menuItemList";

// helpers
import { sanitizeText } from "../../../../../../../../utility/sanitizeText";
import { getSubHeading } from "./helpers/menuSection.general";

// css
import "./menuSection.css";

const MenuSection = (props) => {
  const { heading, itemList } = props;

  return (
    <div className="menu-section" id={sanitizeText(heading)}>
      <h2>{heading}</h2>
      <p className="sub-title">{getSubHeading(itemList.length)}</p>
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
