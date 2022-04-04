// prop-types
import PropTypes from "prop-types";

// components
import NavLinkItem from "../navLinkItem";

// css
import "./navLinks.css";

const renderNavLinks = function (links) {
  return links.map((link) => {
    return <NavLinkItem item={link} key={link.label} />;
  });
};

const NavLinks = function (props) {
  const { className, navItems } = props;
  return (
    <nav className={className}>
      <ul className="nav-links flex align-items-center justify-content-space-evenly">
        {renderNavLinks(navItems)}
      </ul>
    </nav>
  );
};

NavLinks.defaultProps = {
  className: undefined,
  navItems: [
    {
      label: "Link #",
      icon: null,
    },
  ],
};

NavLinks.propTypes = {
  className: PropTypes.string,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      icon: PropTypes.string,
    })
  ),
};

export default NavLinks;
