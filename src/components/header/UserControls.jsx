import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import ControlButton from "./ControlButton";

import "./UserControls.scss";

const UserControls = () => {
  const state = useSelector((state) => state.userAuth.token);
  const userData = useSelector((state) => state.userData.userData);
  const cart = useSelector((state) => state.userData.cart);

  
  let cartTotalPrice = 0;
  
  for (let i = 0; i < cart.length; i++) {
    cartTotalPrice += parseFloat(cart[i].price.replace(" ","").replace(",","."))  * cart[i].amount;
  }

  return (
    <div className="controls__container">
      <Link to="/kontakt">
        <ControlButton
          icon={<i className="fa-solid fa-phone control__button-icon"></i>}
          description={"Kontakt"}
        />
      </Link>
      <Link to="/listy-zakupowe">
        <ControlButton
          icon={<i className="fa-solid fa-heart control__button-icon"></i>}
          description={"Listy zakupowe"}
        />
      </Link>
      <Link to={state ? "/konto" : "/logowanie"}>
        <ControlButton
          icon={<i className="fa-solid fa-user control__button-icon"></i>}
          description={`${
            state
              ? `${userData && userData.name ? userData.name : "Twoje konto"}`
              : "Zaloguj się"
          }`}
        />
      </Link>
      <Link to="/koszyk">
        <ControlButton
          icon={
            <i className="fa-solid fa-cart-shopping control__button-icon"></i>
          }
          description={`${cartTotalPrice.toFixed(2)} zł`}
        />
      </Link>
    </div>
  );
};

export default UserControls;
