import { useLocation } from "react-router-dom";

import "./Main.scss";

const Main = (props) => {
  const location = useLocation();
  return (
    <main
      className={`main ${
        location.pathname === "/logowanie" ? "main--login" : ""
      }`}
    >
      {props.children}
    </main>
  );
};

export default Main;
