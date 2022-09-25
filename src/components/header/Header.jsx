import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactDOM from "react-dom";

import QuickSearch from "./QuickSearch";
import Navigation from "./Navigation/Navigation";
import UserControls from "./UserControls";
import Logo from "./Logo";

import "./Header.scss";

const Header = () => {
  const resolution = useSelector((state) => state.window.resolution);

  const location = useLocation();
  const navRef = useRef();

  const navShowHandler = () => {
    navRef.current.style.top = "100%";
  };

  const navHideHandler = () => {
    navRef.current.style.top = `-${navRef.current.clientHeight}px`;
  };

  return (
    <header
      className={`header ${
        (location.pathname === "/logowanie" ||
          location.pathname === "/rejestracja") &&
        "header--hide"
      }`}
    >
      <div className="header__content">
        <Logo />
        <QuickSearch />
        {resolution > 1024 ? (
          <UserControls navShow={navShowHandler} navHide={navHideHandler} />
        ) : (
          ReactDOM.createPortal(
            <UserControls navShow={navShowHandler} navHide={navHideHandler} />,
            document.getElementById("controls-root")
          )
        )}
      </div>
      <Navigation
        navRef={navRef}
        navShow={navShowHandler}
        navHide={navHideHandler}
      />
    </header>
  );
};

export default Header;
