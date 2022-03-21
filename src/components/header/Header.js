import QuickSearch from "./QuickSearch";
import Navigation from "./Navigation";
import UserControls from "./UserControls";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__main header--fixed">
        <div className="header__content">
          <img src="./images/logo.png" alt="logo" className="logo"></img>
          <QuickSearch />
          <UserControls />
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Header;
