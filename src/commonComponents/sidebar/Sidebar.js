// react
import { useEffect, useState } from "react";

// prop-types
import PropTypes from "prop-types";

//lodash
import _map from "lodash/map";
import _startCase from "lodash/startCase";
import _findIndex from "lodash/findIndex";

//helpers
import { sanitizeText } from "../../utility/sanitizeText";
import {
  getMatchedIndexWithUrlHash,
  isEqualWith,
  scrollStyle,
} from "./helpers/sidebar.general";

// components
import LinkItem from "../linkItem";

// css
import "./sidebar.css";

const Sidebar = (props) => {
  const { links, className } = props;

  const [activeIdx, setActiveIdx] = useState(null);

  useEffect(() => {
    const index = getMatchedIndexWithUrlHash(links);
    setActiveIdx(index);
  }, [links]);

  const onClick = (evt) => {
    const {
      target: { innerText },
    } = evt;
    const index = _findIndex(links, isEqualWith(innerText));
    if (index !== -1) {
      setActiveIdx(index);
    }
  };

  const renderLink = (label, index) => {
    const sanitizedText = sanitizeText(label);
    return (
      <LinkItem
        key={label}
        label={_startCase(label)}
        href={`#${sanitizedText}`}
        isActive={activeIdx === index}
        onClick={onClick}
      />
    );
  };

  return (
    <div className={`sidebar-nav-links ${className}`}>
      {_map(links, renderLink)}
      <div className="sidebar-scroller" style={scrollStyle(activeIdx)}></div>
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
