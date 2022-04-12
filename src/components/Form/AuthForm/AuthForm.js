import { useRef } from "react";

import SubmitButton from "../../Button/SubmitButton";

import "./AuthForm.scss";

const AuthForm = (props) => {
  const email = useRef();
  const password = useRef();
  const cnfPassword = useRef();
  const checkbox = useRef();

  const userAuthHandler = (event) => {
    event.preventDefault();

    const currentEmail = email.current.value;
    const currentPassword = password.current.value;
    const currentCnfPassword = props.signup && cnfPassword.current.value;
    const currentCheckbox = props.signup && checkbox.current.value;

    const loginURL =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDkqipfOWliQ3pu_Vuz3-5mVFQnpD3XRFU";
    const signupURL =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDkqipfOWliQ3pu_Vuz3-5mVFQnpD3XRFU";
      // `${props.currentForm === "login" ? loginURL : ""}${
      //   props.currentForm === "signup" ? signupURL : ""
      // }`,

    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDkqipfOWliQ3pu_Vuz3-5mVFQnpD3XRFU",
      {
        method: "POST",
        body: JSON.stringify({
          email: currentEmail,
          password: currentCnfPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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
