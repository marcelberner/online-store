import { useSelector, useDispatch } from "react-redux";
import { useLocation, Outlet, useNavigate } from "react-router-dom";

import { setTotalPrice } from "../../store/orderData";

import useData from "../../hooks/useData";

import { changeRequestStatus } from "../../store/dataRequest";
import { cartClear } from "../../store/userData";

import SubmitButton from "../../components/Button/SubmitButton";
import PromoCode from "../../components/Cart/PromoCode/PromoCode";
import PriceItems from "../../components/Cart/PriceItems/PriceItems";

import "./Cart.scss";

const Cart = () => {
  const deliveryMethod = useSelector((state) => state.orderData.deliveryMethod);
  const paymentMethod = useSelector((state) => state.orderData.paymentMethod);
  const customerData = useSelector((state) => state.orderData.customerData);
  const totalPrice = useSelector((state) => state.orderData.totalPrice);
  const userData = useSelector((state) => state.userData.userData);
  const token = useSelector((state) => state.userAuth.token);
  const cart = useSelector((state) => state.userData.cart);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { dataRequest } = useData();

  const location = useLocation();

  let cartTotalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    cartTotalPrice +=
      parseFloat(cart[i].price.replace(" ", "").replace(",", ".")) *
      cart[i].amount;
  }

  const sendOrderHandler = async () => {
    const date = new Date();

    const currentDate = `${date.getFullYear()}-${
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1
    }-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;

    const sendOrderRequest = await dataRequest({
      method: "POST",
      database: "orders",
      body: {
        userId: token,
        customerData: customerData,
        deliveryMethod: deliveryMethod,
        paymentMethod: paymentMethod,
        totalPrice: totalPrice,
        status: "pending",
        date: currentDate,
        products: cart,
      },
    });

    if (token) {
      const clearCart = await dataRequest({
        method: "DELETE",
        database: `users/${userData.id}/cart`,
      });
    } else {
      dispatch(cartClear());
    }

    dispatch(changeRequestStatus());
    navigate("/konto/historia-zamowien");
  };

  const switchPage = () => {
    if (location.pathname === "/koszyk") {
      dispatch(setTotalPrice(cartTotalPrice));
      navigate("/koszyk/dostawa");
    } else if (location.pathname === "/koszyk/dostawa")
      navigate("/koszyk/podsumowanie");
      else if (location.pathname === "/koszyk/podsumowanie") {
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
              <Outlet />
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
          <h3 className="cart__allert">Twój koszyk jest pusty</h3>
        )}
      </div>
    </section>
  );
};

export default Cart;
