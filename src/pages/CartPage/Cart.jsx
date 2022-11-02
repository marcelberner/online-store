import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, Outlet, useNavigate } from "react-router-dom";

import { setTotalPrice } from "../../store/orderData";

import useData from "../../hooks/useData";

import { cartClear } from "../../store/userData";

import SubmitButton from "../../components/Button/SubmitButton";
import PromoCode from "../../components/Cart/PromoCode/PromoCode";
import PriceItems from "../../components/Cart/PriceItems/PriceItems";
import NoFoundHeader from "../../components/UI/Allerts/NoFoundHeader";

import "./Cart.scss";

const Cart = () => {
  const deliveryMethod = useSelector((state) => state.orderData.deliveryMethod);
  const paymentMethod = useSelector((state) => state.orderData.paymentMethod);
  const customerData = useSelector((state) => state.orderData.customerData);
  const totalPrice = useSelector((state) => state.orderData.totalPrice);
  const userId = useSelector((state) => state.userAuth.userId);
  const cart = useSelector((state) => state.userData.cart);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { dataRequest } = useData();

  const location = useLocation();

  const formRef = useRef(null);

  let cartTotalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    cartTotalPrice += cart[i].price * cart[i].amount;
  }

  const sendOrderHandler = async () => {
    await dataRequest({
      method: "POST",
      database: "orders/order",
      body: {
        customerData: customerData,
        deliveryMethod: deliveryMethod,
        paymentMethod: paymentMethod,
        totalPrice: totalPrice,
        products: cart,
      },
    });

    if (userId)
      await dataRequest({
        method: "DELETE",
        database: `users/${userId}/cart/clear`,
      });

    dispatch(cartClear());
    navigate("/konto/historia-zamowien");
  };

  const switchPage = () => {
    if (location.pathname === "/koszyk") {
      dispatch(setTotalPrice(cartTotalPrice));
      navigate("/koszyk/dostawa");
    } else if (location.pathname === "/koszyk/dostawa") {
      const isFormValid = formRef.current();

      if (isFormValid) navigate("/koszyk/podsumowanie");
      else return;
    } else if (location.pathname === "/koszyk/podsumowanie") {
      sendOrderHandler();
    }
  };

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
        {cart.length > 0 ? (
          <>
            <div className="cart__content">
              <Outlet context={formRef} />
              <div
                className={`cart__sumarry ${
                  location.pathname !== "/koszyk"
                    ? "cart__sumarry--compact"
                    : ""
                }`}
              >
                <div className="cart__button">
                  <SubmitButton
                    size={"large"}
                    center={
                      location.pathname === "/koszyk/dostawa" ||
                      location.pathname === "/koszyk/podsumowanie"
                    }
                    text={`${
                      location.pathname === "/koszyk"
                        ? "Dostawa i płatność"
                        : ""
                    }${
                      location.pathname === "/koszyk/dostawa"
                        ? "Podsumowanie"
                        : ""
                    }${
                      location.pathname === "/koszyk/podsumowanie"
                        ? "Płacę i zamawiam"
                        : ""
                    }`}
                    action={switchPage}
                  />
                </div>
                <div
                  className={`cart__info ${
                    location.pathname !== "/koszyk" ? "cart__info--hide" : ""
                  }`}
                >
                  <span className="cart__text">Łączna kwota:</span>
                  <span className="cart__text">{`${cartTotalPrice.toFixed(
                    2
                  )} zł`}</span>
                </div>
                <PriceItems
                  cart={cart}
                  hide={location.pathname !== "/koszyk" ? true : false}
                />
                <div
                  className={`cart__promo ${
                    location.pathname !== "/koszyk" ? "cart__promo--hide" : ""
                  }`}
                >
                  <PromoCode />
                </div>
              </div>
            </div>
          </>
        ) : (
          <NoFoundHeader text={"Twój koszyk jest pusty"} />
        )}
      </div>
    </section>
  );
};

export default Cart;
