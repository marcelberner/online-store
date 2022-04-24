import { Link, Outlet } from "react-router-dom";

import "./AccountPage.scss";

const AccountPage = () => {
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
          <Link to={"/konto/twoje-produkty"}>
            <li className="account-page__option">
              <span className="account-page__title">Twoje produkty</span>
            </li>
          </Link>
          <Link to={"/konto/zamowienia-w-realizacji"}>
            <li className="account-page__option">
              <span className="account-page__title">
                Zamówienia w realizacji
              </span>
            </li>
          </Link>
          <Link to={"/konto/zwroty-i-reklamacje"}>
            <li className="account-page__option">
              <span className="account-page__title">Zwroty i reklamacje</span>
            </li>
          </Link>
          <Link to={"/listy-zakupowe"}>
            <li className="account-page__option">
              <span className="account-page__title">Listy zakupowe</span>
            </li>
          </Link>
          <Link to={"/konto/wyslij-zapytanie"}>
            <li className="account-page__option">
              <span className="account-page__title">Wyślij zapytanie</span>
            </li>
          </Link>

          <li className="account-page__option account-page__option--separate">
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
