import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ReactDOM from "react-dom";

import QuickSearch from "./QuickSearch";
import Navigation from "./Navigation/Navigation";
import UserControls from "./UserControls";
import Logo from "./Logo";

import "./Header.scss";

let lastPosition = 0;

const Header = () => {
  const resolution = useSelector((state) => state.window.resolution);

  const [navigationState, setNavigationState] = useState(
    resolution <= 800 ? false : true
  );

  const navRef = useRef();

  const navShow = () => {
    navRef.current.style.top = "100%";
    setNavigationState(true);
  };

  const navHide = () => {
    navRef.current.style.top = `-${navRef.current.clientHeight}px`;
    setNavigationState(false);
  };

  useEffect(() => {
    if (resolution <= 800) navHide();
    else navShow();

    window.addEventListener("scroll", () => {
      if (resolution > 800) {
        if (window.scrollY < lastPosition) navShow();
        else navHide();

        lastPosition = window.scrollY;
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="header">
      <div className="header__content">
        <Logo />
        <QuickSearch />
        {resolution > 1024 ? (
          <UserControls
            navShow={navShow}
            navHide={navHide}
            navState={navigationState}
          />
        ) : (
          ReactDOM.createPortal(
            <UserControls
              navShow={navShow}
              navHide={navHide}
              navState={navigationState}
            />,
            document.getElementById("controls-root")
          )
        )}
      </div>
      <Navigation navRef={navRef} navShow={navShow} navHide={navHide} />
    </header>
  );
};

export default Header;
