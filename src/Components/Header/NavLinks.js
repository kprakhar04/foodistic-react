import NavLink from "./NavLink";
import "./NavLinks.css";

const getNavLinksTemplate = function (links) {
  return links.map((link) => {
    return <NavLink item={link} key={link.label} />;
  });
};

const NavLinks = function (props) {
  const { className, navItems } = props;
  return (
    <nav className={className}>
      <ul className="nav-links flex align-items-center justify-content-space-evenly">
        {getNavLinksTemplate(navItems)}
      </ul>
    </nav>
  );
};

export default NavLinks;
