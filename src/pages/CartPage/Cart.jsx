import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "react-query";

import useData from "../../hooks/useData";
import useAllert from "../../hooks/useAllert";

import { clearOrderData } from "../../store/orderData";

import SubmitButton from "../../components/Button/SubmitButton";
import PromoCode from "../../components/Cart/PromoCode/PromoCode";
import PriceItems from "../../components/Cart/PriceItems/PriceItems";
import NoFoundHeader from "../../components/UI/Allerts/NoFoundHeader";
import Allert from "../../components/Allert/Allert";

import "./Cart.scss";

const Cart = () => {
  const deliveryMethod = useSelector((state) => state.orderData.deliveryMethod);
  const paymentMethod = useSelector((state) => state.orderData.paymentMethod);
  const customerData = useSelector((state) => state.orderData.customerData);
  const totalPrice = useSelector((state) => state.orderData.totalPrice);
  const cart = useSelector((state) => state.orderData.products);
  const userId = localStorage.getItem("userId");

  const [isDisabled, setIsDisabled] = useState(false);
  const { allert, allertType, allertText } = useAllert();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { getCartItems, clearCart, sendOrder } = useData();
  const queryClient = useQueryClient();

  const location = useLocation();
  const formRef = useRef(null);

  const { data } = useQuery({
    queryKey: ["user-cart", { exact: true }],
    queryFn: () => getCartItems(),
  });

  const clearCartMutation = useMutation({
    mutationFn: clearCart,
    onSuccess: () => {
      queryClient.invalidateQueries(["user-cart", { exact: true }]);
    },
  });

  const sendOrderMutation = useMutation({
    mutationFn: sendOrder,
    onSuccess: () => {
      allert({ type: "succes", text: "Wysłano zamówienie" });
      setTimeout(() => {
        if (userId) {
          queryClient.invalidateQueries("orders");
          clearCartMutation.mutate();
          navigate("/konto/historia-zamowien");
          setIsDisabled(false);
        }
        dispatch(clearOrderData());
      }, 1500);
    },
    onError: () => {
      allert({ type: "fail", text: "Nie udało się wysłać zamówienia" });
      setIsDisabled(false);
    },
  });

  const sendOrderHandler = async () => {
    setIsDisabled(true);
    sendOrderMutation.mutate({
      products: userId ? data.cart : cart,
      deliveryMethod,
      paymentMethod,
      totalPrice,
      userId,
      customerData,
    });
  };

  const switchPage = () => {
    if (location.pathname === "/koszyk") {
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
          <h1 className="cart__title">
            {location.pathname === "/koszyk"
              ? "Twój koszyk"
              : location.pathname === "/koszyk/dostawa"
              ? "Dostawa"
              : location.pathname === "/koszyk/podsumowanie"
              ? "Podsumowanie"
              : ""}
          </h1>
        </div>
        <div
          className={`cart__progress ${
            location.pathname === "/koszyk"
              ? "cart__progress--stage1"
              : location.pathname === "/koszyk/dostawa"
              ? "cart__progress--stage2"
              : location.pathname === "/koszyk/podsumowanie"
              ? "cart__progress--stage3"
              : ""
          }`}
        ></div>
        {(data && data.cart.length) > 0 || cart.length > 0 ? (
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
                    action={switchPage}
                    size={"large"}
                    disabled={isDisabled}
                    center={
                      location.pathname === "/koszyk/dostawa" ||
                      location.pathname === "/koszyk/podsumowanie"
                    }
                    text={`${
                      location.pathname === "/koszyk"
                        ? "Dostawa i płatność"
                        : location.pathname === "/koszyk/dostawa"
                        ? "Podsumowanie"
                        : location.pathname === "/koszyk/podsumowanie"
                        ? "Płacę i zamawiam"
                        : ""
                    }`}
                  />
                </div>
                <div
                  className={`cart__info ${
                    location.pathname !== "/koszyk" ? "cart__info--hide" : ""
                  }`}
                >
                  <span className="cart__text">Łączna kwota:</span>
                  <span className="cart__text">
                    {(data && data.totalPrice.toFixed(2)) ||
                      totalPrice.toFixed(2)}{" "}
                    zł
                  </span>
                </div>
                <PriceItems
                  cart={userId ? data.cart : cart}
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
        {allertType && allertText && (
          <Allert type={allertType} text={allertText} />
        )}
      </div>
    </section>
  );
};

export default Cart;
