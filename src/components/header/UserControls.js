import ControlButton from "./ControlButton";

import "./UserControls.scss";

const UserControls = () => {
  return (
    <div className="controls__container">
      <ControlButton
        icon={<i className="fa-solid fa-phone control__button-icon"></i>}
        description={"Kontakt"}
      />
      <ControlButton
        icon={<i className="fa-solid fa-heart control__button-icon"></i>}
        description={"Listy zakupowe"}
      />
      <ControlButton
        icon={<i className="fa-solid fa-user control__button-icon"></i>}
        description={"Twoje konto"}
      />
      <ControlButton
        icon={<i className="fa-solid fa-cart-shopping control__button-icon"></i>}
        description={"0,00 zł"}
      />
    </div>
  );
};

export default UserControls;
