// react
import { useCallback, useEffect, useState } from "react";

// prop-types
import PropTypes from "prop-types";

//lodash
import _map from "lodash/map";

// constants
import { INITIAL_INDEX, SCROLL_FACTOR } from "./constants/sidebar.general";

//helpers
import { sanitizeText } from "../../utility/sanitizeText";
import { getMatchedIndexWithUrlHash } from "./helpers/sidebar.general";

// components
import LinkItem from "../linkItem";

// css
import "./sidebar.css";

const Sidebar = (props) => {
  const { links, className } = props;

  const [activeIdx, setActiveIdx] = useState(INITIAL_INDEX);

  const setInitialActiveIdx = useCallback(() => {
    const index = getMatchedIndexWithUrlHash(links);
    setActiveIdx(index);
  }, [links]);

  useEffect(() => {
    setInitialActiveIdx();
  }, [setInitialActiveIdx]);

  const handleClick = (index) => {
    setActiveIdx(index);
  };

  const renderLink = (label, index) => {
    const sanitizedText = sanitizeText(label);

    const isActive = activeIdx === index;

    return (
      <LinkItem
        key={label}
        label={label}
        href={`#${sanitizedText}`}
        isActive={isActive}
        onClick={() => handleClick(index)}
      />
    );
  };

  const scrollStyle = {
    transform: `translateY(${activeIdx * SCROLL_FACTOR}rem)`,
  };

  return (
    <div className={`sidebar-nav-links ${className}`}>
      {_map(links, renderLink)}
      <div className="sidebar-scroller" style={scrollStyle}></div>
    </div>
  );
};

Sidebar.defaultProps = {
  items: ["Link 1", "Link 2", "Link 3"],
  className: "",
};

Sidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};

export default Sidebar;
