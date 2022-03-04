import "./BrandLogo.css";
import brandLogo from ".././assets/images/swiggy-logo.svg";

const brandName = "Foodistic";

const BrandLogo = function () {
  return (
    <img src={brandLogo} alt={brandName} className="logo cursor-pointer" />
  );
};
export default BrandLogo;
