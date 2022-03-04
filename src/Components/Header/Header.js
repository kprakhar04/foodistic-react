import BrandLogo from "../../commonComponents/BrandLogo";
import AddressBar from "./AddressBar";
import { navConfig, addressConfig } from "./constants/config";
import "./Header.css";
import NavLinks from "./NavLinks";

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
