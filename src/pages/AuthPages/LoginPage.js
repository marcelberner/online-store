import { React, useState } from "react";

import Logo from "../../components/header/Logo";
import AuthSelect from "../../components/Form/AuthForm/AuthSelect";
import AuthForm from "../../components/Form/AuthForm/AuthForm";

import "./LoginPage.scss";

const LoginPage = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const switchLoginFormHandler = () => {
    setCurrentForm("login");
  };

  const switchSignupFormHandler = () => {
    setCurrentForm("signup");
  };

  return (
    <section
      className="login-page"
      style={{ backgroundImage: `url(../images/login-bg.png)` }}
    >
      <div className="login-page__container">
        <div className="login-page__header">
          <Logo />
        </div>
        <AuthSelect
          switchLoginForm={switchLoginFormHandler}
          switchSignupForm={switchSignupFormHandler}
          currentForm={currentForm}
        />
        <div className="login-page__content">
          {currentForm === "login" && <AuthForm currentForm={currentForm} />}
          {currentForm === "signup" && <AuthForm currentForm={currentForm} />}
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
