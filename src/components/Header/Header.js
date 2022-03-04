// constants
import { navConfig, addressConfig } from "./constants/config";

// components
import BrandLogo from "../../commonComponents/brandLogo";
import AddressBar from "./components/addressBar";
import NavLinks from "./components/navLinks";

// css
import "./header.css";

const Header = function () {
  return (
    <header className="header flex align-items-center">
      <section className="header-sec-left flex align-items-center">
        <BrandLogo />
        <AddressBar address={addressConfig} />
      </section>
      <NavLinks className="header-sec-right" navItems={navConfig} />
    </header>
  );
};
export default Header;
