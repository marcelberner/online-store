import React from "react";
import { Link } from "react-router-dom";

import ControlButton from "./ControlButton";

import "./UserControls.scss";

const UserControls = () => {
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
      <Link to="/konto">
        <ControlButton
          icon={<i className="fa-solid fa-user control__button-icon"></i>}
          description={"Twoje konto"}
        />
      </Link>
      <Link to="/koszyk">
        <ControlButton
          icon={
            <i className="fa-solid fa-cart-shopping control__button-icon"></i>
          }
          description={"0,00 zł"}
        />
      </Link>
    </div>
  );
};

export default UserControls;
