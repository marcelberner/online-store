import { useSelector } from "react-redux";
import { useLocation, Outlet } from "react-router-dom";

import SubmitButton from "../../components/Button/SubmitButton";
import PromoCode from "../../components/Cart/PromoCode/PromoCode";
import PriceItems from "../../components/Cart/PriceItems/PriceItems";

import "./Cart.scss";

const Cart = () => {
  const cart = useSelector((state) => state.userData.cart);

  const location = useLocation();

  let cartTotalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    cartTotalPrice +=
      parseFloat(cart[i].price.replace(" ", "").replace(",", ".")) *
      cart[i].amount;
  }

  return (
    <section className="cart">
      <div className="cart__container">
        <div className="cart__header">
          <h1 className="cart__title">{`${
            location.pathname === "/koszyk" ? "Twój koszyk" : ""
          }${location.pathname === "/koszyk/dostawa" ? "Dostawa" : ""}${
            location.pathname === "/koszyk/podsumowanie" ? "Podsumowanie" : ""
          }`}</h1>
        </div>
        {cart.length > 0 ? (
          <>
            <div className="cart__content">
              <Outlet cart={cart} />
              <div className="cart__sumarry">
                <div className="cart__button">
                  <SubmitButton size={"large"} text={"Dostawa i płatność"} />
                </div>
                <div className="cart__info">
                  <span className="cart__text">Łączna kwota:</span>
                  <span className="cart__text">{`${cartTotalPrice.toFixed(
                    2
                  )} zł`}</span>
                </div>
                <PriceItems cart={cart} />
                <div className="cart__promo">
                  <PromoCode />
                </div>
              </div>
            </div>
            <div
              className={`cart__progress ${
                location.pathname === "/koszyk" ? "cart__progress--stage1" : ""
              }${
                location.pathname === "/koszyk/dostawa"
                  ? "cart__progress--stage2"
                  : ""
              }${
                location.pathname === "/koszyk/podsumowanie"
                  ? "cart__progress--stage3"
                  : ""
              }`}
            ></div>
          </>
        ) : (
          <h3 className="cart__allert">Twój koszyk jest pusty</h3>
        )}
      </div>
    </section>
  );
};

export default Cart;
