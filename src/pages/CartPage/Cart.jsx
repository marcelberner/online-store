import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "react-query";

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
  const totalPrice = useSelector((state) => state.orderData.totalPrice);
  const cart = useSelector((state) => state.userData.cart);
  const userId = localStorage.getItem("userId");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { getCartItems, deleteFromCart } = useData();
  const queryClient = useQueryClient();

  const location = useLocation();
  const formRef = useRef(null);

  const { data } = useQuery({
    queryKey: ["user-cart", { exact: true }],
    queryFn: (query) => getCartItems(),
  });

  const sendOrderMutation = useMutation({
    mutationFn: (mutation) => mutation,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  const clearCartMutation = useMutation({
    mutationFn: () => deleteFromCart,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  const sendOrderHandler = async () => {
    sendOrderMutation.mutate({
      deliveryMethod: deliveryMethod,
      paymentMethod: paymentMethod,
      totalPrice: totalPrice,
      userId: userId,
      products: cart,
    });

    if (userId) clearCartMutation.mutate();
    else dispatch(cartClear());

    navigate("/konto/historia-zamowien");
  };

  const switchPage = () => {
    if (location.pathname === "/koszyk") {
      // dispatch(setTotalPrice(cartTotalPrice));
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
        {data && data.cart.length > 0 ? (
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
                    {data.totalPrice.toFixed(2)} zł
                  </span>
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
