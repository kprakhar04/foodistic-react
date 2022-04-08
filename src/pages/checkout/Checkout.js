// component
import IconWithLabel from "../../commonComponents/iconWithLabel";

// image
import orderConfirm from "../../assets/images/thank-you.webp";

// css
import "./checkout.css";

const Checkout = () => {
  return (
    <IconWithLabel
      label="Thanks for ordering some yummy food, can't wait to see you delighted!!"
      icon={orderConfirm}
      className="checkout"
    />
  );
};

export default Checkout;
