import { useLocation } from "react-router-dom";

import "./Layout.scss";

const Layout = (props) => {
  const location = useLocation();

  return (
    <div
      className={`box ${
        (location.pathname === "/logowanie" ||
          location.pathname === "/rejestracja") &&
        "box--minsize"
      }`}
    >
      {props.children}
    </div>
  );
};

export default Layout;
