import { Link } from "react-router-dom";

import QuickSearch from "./QuickSearch";
import Navigation from "./Navigation";
import UserControls from "./UserControls";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container header__container--fixed">
        <div className="header__content">
          <Link to="/">
            <div
              className="header__logo"
              style={{ backgroundImage: `url(./images/logo.png)` }}
            ></div>
          </Link>
          <QuickSearch />
          <UserControls />
        </div>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
