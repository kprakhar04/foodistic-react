import "./NavLink.css";
const NavLink = function (props) {
  const {
    item: { icon, label },
  } = props;
  return (
    <li className="flex align-items-center">
      <a href="/" className="flex align-items-center fw-700">
        <img src={icon} alt={label} className="icon" />
        <span>{label}</span>
      </a>
    </li>
  );
};
export default NavLink;
