import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";

import { clearOrderData } from "../../store/orderData";

import "./AccountPage.scss";

const AccountPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const queryClient = useQueryClient();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    dispatch(clearOrderData());
    queryClient.removeQueries();
    navigate("/");
  };

  return (
    <section className="account-page">
      <div className="account-page__container">
        <ul className="account-page__select">
          <Link to={"/konto"}>
            <li className="account-page__option">
              <span className="account-page__title">
                Informacje o użytkowniku
              </span>
            </li>
          </Link>
          {/* <Link to={"/konto/twoje-produkty"}>
            <li className="account-page__option">
              <span className="account-page__title">Twoje produkty</span>
            </li>
          </Link> */}
          <Link to={"/konto/historia-zamowien"}>
            <li className="account-page__option">
              <span className="account-page__title">Historia zamówień</span>
            </li>
          </Link>
          <Link to={"/listy-zakupowe"}>
            <li className="account-page__option">
              <span className="account-page__title">Listy zakupowe</span>
            </li>
          </Link>
          <li
            className="account-page__option account-page__option--separate"
            onClick={logoutHandler}
          >
            <span className="account-page__title">Wyloguj się</span>
          </li>
          <li className="account-page__option account-page__option--warn">
            <span className="account-page__title">Usuń konto</span>
          </li>
        </ul>
        <div className="account-page__content">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default AccountPage;
