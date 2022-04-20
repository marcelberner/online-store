import { useRef } from "react";

import useAuth from "../../../hooks/useAuth";

import SubmitButton from "../../Button/SubmitButton";

import "./AuthForm.scss";

const AuthForm = (props) => {
  const email = useRef();
  const password = useRef();
  const cnfPassword = useRef();
  const checkbox = useRef();

  const { authRequest } = useAuth();

  const userAuthHandler = (event) => {
    event.preventDefault();

    const currentEmail = email.current.value;
    const currentPassword = password.current.value;
    const currentCnfPassword =
      props.currentForm === "signup"
        ? cnfPassword.current.value
        : currentPassword;
    const currentCheckbox =
      props.currentForm === "signup" ? checkbox.current.value : true;

    authRequest({
      currentForm: props.currentForm,
      email: currentEmail,
      password: currentPassword,
      cnfPassword: currentCnfPassword,
      checkbox: currentCheckbox,
    });
  };

  return (
    <div className="auth-form">
      <form onSubmit={userAuthHandler}>
        <div className="auth-form__content">
          <input
            className="auth-form__input"
            type="email"
            name="email"
            placeholder="e-mail"
            ref={email}
            required
          />
        </div>
        <div className="auth-form__content">
          <input
            className="auth-form__input"
            type="password"
            name="password"
            placeholder="hasło"
            ref={password}
            required
          />
        </div>
        {props.currentForm === "signup" && (
          <div className="auth-form__content">
            <input
              className="auth-form__input"
              type="password"
              name="password"
              placeholder="powtórz hasło"
              ref={cnfPassword}
              required
            />
          </div>
        )}
        {props.currentForm === "signup" && (
          <label className="auth-form__content">
            <input
              className="auth-form__input--checkbox"
              type="checkbox"
              name="accept-rules"
              ref={checkbox}
              required
            />
            <span className="auth-form__label">
              Akceptuję regulamin sklepu Internetowego.
            </span>
          </label>
        )}
        <div className="auth-form__content">
          {props.currentForm === "login" && (
            <SubmitButton text={"Zaloguj się"} />
          )}
          {props.currentForm === "signup" && (
            <SubmitButton text={"Załóż konto"} />
          )}
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
