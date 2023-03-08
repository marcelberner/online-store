import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import useData from "../../hooks/useData";

import ControlButton from "./ControlButton";
import Backdrop from "../UI/Backdrop/Backdrop";

import "./UserControls.scss";

const UserControls = (props) => {
  const token = localStorage.getItem("token");
  const resolution = useSelector((state) => state.window.resolution);
  const totalPrice = useSelector((state) => state.orderData.totalPrice);
  const totalAmount = useSelector((state) => state.orderData.totalAmount);

  const { getCartItems, getUserData } = useData();

  const { data } = useQuery({
    queryKey: ["user-cart", { exact: true }],
    queryFn: () => getCartItems(),
  });

  const { data: userData } = useQuery({
    queryKey: ["user-data"],
    queryFn: () => getUserData(),
  });

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
        <Link to={token ? "/konto" : "/logowanie"}>
          <ControlButton
            icon={<i className="fa-solid fa-user control__button-icon"></i>}
            description={`${
              token
                ? `${(userData && userData.name) || "Twoje konto"}`
                : "Zaloguj się"
            }`}
          />
        </Link>
        <Link to="/koszyk">
          <ControlButton
            icon={
              <i className="fa-solid fa-cart-shopping control__button-icon">
                {((data && data.totalPrice > 0) || totalAmount > 0) && (
                  <span className="control__button-info">
                    {token ? data.totalAmount : totalAmount}
                  </span>
                )}
              </i>
            }
            description={`${
              token
                ? (data && data.totalPrice.toFixed(2)) || (0).toFixed(2)
                : totalPrice.toFixed(2)
            } zł`}
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
