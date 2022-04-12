import React from "react";
import { Link } from "react-router-dom";

import "./Logo.scss";

const Logo = () => {
  return (
    <Link to="/">
      <div
        className="logo"
        style={{ backgroundImage: `url(./images/logo.png)` }}
      ></div>
    </Link>
  );
};

export default Logo;
