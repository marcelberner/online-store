import React from "react";
import { useLocation } from "react-router-dom";

import QuickSearch from "./QuickSearch";
import Navigation from "./Navigation";
import UserControls from "./UserControls";
import Logo from "./Logo";

import "./Header.scss";

const Header = () => {
  const location = useLocation();

  return (
    <header
      className={`header ${
        (location.pathname === "/logowanie" ||
          location.pathname === "/rejestracja") &&
        "header--hide"
      }`}
    >
      <div className="header__container header__container--fixed">
        <div className="header__content">
          <Logo />
          <QuickSearch />
          <UserControls />
        </div>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;