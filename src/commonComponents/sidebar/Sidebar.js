// react
import React from "react";

// prop-types
import PropTypes from "prop-types";

//lodash
import _map from "lodash/map";

// constants
import { INITIAL_STATE } from "./constants/sidebar.general";

//helpers
import { checkEqualityWithHash, isHashEmpty } from "./helpers/sidebar.general";
import { sanitizeText } from "../../utility/sanitizeText";

// components
import LinkItem from "./components/linkItem";

// css
import "./sidebar.css";

class Sidebar extends React.Component {
  state = INITIAL_STATE;

  componentDidMount() {
    window.addEventListener("hashchange", this.handleHashChange);
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange", this.handleHashChange);
  }

  handleHashChange = () => {
    this.setState({
      hashChanged: true,
    });
  };

  renderLink = (label, index) => {
    const { hashChanged } = this.state;
    const url = sanitizeText(label);
    let isEqual = checkEqualityWithHash(url);

    if (!hashChanged && isHashEmpty() && index === 0) {
      isEqual = true;
    }

    return <LinkItem key={label} label={label} url={url} isActive={isEqual} />;
  };

  render() {
    const { links, className } = this.props;
    return (
      <div className={`sidebar-nav-links ${className}`}>
        {_map(links, this.renderLink)}
        <div className="sidebar-scroller"></div>
      </div>
    );
  }
}

Sidebar.defaultProps = {
  items: ["Link 1", "Link 2", "Link 3"],
  className: "",
};

Sidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};

export default Sidebar;
