import { useState } from "react";

import SubmitButton from "../../Button/SubmitButton";

import "./PromoCode.scss";

const PromoCode = () => {
  const [isHide, setIsHide] = useState(true);

  const changeHideStateHandler = () => {
    setIsHide(!isHide);
  };
  return (
    <div className="promo-code">
      <div className="promo-code__title" onClick={changeHideStateHandler}>
        <span className="promo-code__text">Wpisz kod promocyjny</span>
        {isHide ? (
          <i className="fa-solid fa-angle-down"></i>
        ) : (
          <i className="fa-solid fa-angle-up"></i>
        )}
      </div>
      {!isHide && (
        <form>
          <div className="promo-code__container">
            <input
              type={"text"}
              placeholder={"Wpisz kod promocyjny"}
              className={"promo-code__input"}
            />
            <SubmitButton size={"small"} text={"Aktywuj"} />
          </div>
        </form>
      )}
    </div>
  );
};

export default PromoCode;
