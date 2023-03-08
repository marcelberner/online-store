import PurchaseInfo from "./PurchaseInfo";
import WishButton from "../../Button/WishButton";
import CartButton from "../../Button/CartButton";

import "./PurchaseBar.scss";

const PurchaseBar = (props) => {
  const token = localStorage.getItem("token");

  return (
    <div className="purchase-bar">
      <div className="purchase-bar__panel">
        <span className="purchase-bar__price">
          {props.price.toFixed(2) + " zł"}
        </span>
        <div className="purchase-bar__buttons">
          {token && <WishButton id={props.id} size={"large"} />}
          <CartButton
            id={props.id}
            img={props.img}
            name={props.name}
            price={props.price}
            size={"large"}
          />
        </div>
      </div>
      <PurchaseInfo
        text={["Dostępny", "Dowiedz się więcej"]}
        icon={<i className="fa-solid fa-circle-check"></i>}
      />
      <PurchaseInfo
        text={["Kup teraz a otrzymasz pojutrze", "Dowiedz się więcej"]}
        icon={<i className="fa-solid fa-clock"></i>}
      />
      <PurchaseInfo
        text={["Darmowa dostawa", "Sprawdź szczegóły"]}
        icon={<i className="fa-solid fa-truck"></i>}
      />
      <PurchaseInfo
        text={["Sprawdź dostępność w salonach", "Wybierz salon"]}
        icon={<i className="fa-solid fa-store"></i>}
      />
      <PurchaseInfo
        text={[`Rata tylko ${(props.price / 32).toFixed(2)} zł`, "Oblicz ratę"]}
        icon={<i className="fa-solid fa-calendar-days"></i>}
      />
    </div>
  );
};

export default PurchaseBar;
