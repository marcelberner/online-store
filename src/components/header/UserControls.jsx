import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import ControlButton from "./ControlButton";
import Backdrop from "../UI/Backdrop/Backdrop";

import "./UserControls.scss";

const UserControls = (props) => {
  const state = useSelector((state) => state.userAuth.token);
  const resolution = useSelector((state) => state.window.resolution);
  const userData = useSelector((state) => state.userData.userData);
  const cart = useSelector((state) => state.userData.cart);

  let cartTotalPrice = 0;
  let cartTotalAmount = 0;

  for (let i = 0; i < cart.length; i++) {
    cartTotalPrice += cart[i].price * cart[i].amount;

    cartTotalAmount += cart[i].amount;
  }

  const navToggle = () => {
    if (props.navState) props.navHide();
    else props.navShow();
  };

  return (
    <>
      {props.navState && resolution <= 800 && (
        <Backdrop backdropClear={props.navHide} />
      )}
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
              <i className="fa-solid fa-cart-shopping control__button-icon">
                {cartTotalAmount > 0 && (
                  <span className="control__button-info">
                    {cartTotalAmount}
                  </span>
                )}
              </i>
            }
            description={`${cartTotalPrice.toFixed(2)} zł`}
          />
        </Link>
        <div
          className="control__button control__button--menu"
          onClick={navToggle}
        >
          {props.navState ? (
            <i className="fa-solid fa-xmark control__button-icon"></i>
          ) : (
            <i className="fa-solid fa-bars control__button-icon"></i>
          )}
        </div>
      </div>
    </>
  );
};

export default UserControls;
