// icon
import brandLogo from "../../assets/images/swiggy-logo.svg";

// css
import "./brandLogo.css";

const brandName = "Foodistic";

const BrandLogo = function () {
  return (
    <img src={brandLogo} alt={brandName} className="logo cursor-pointer" />
  );
};
export default BrandLogo;
