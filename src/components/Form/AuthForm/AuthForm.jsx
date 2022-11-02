import { useRef } from "react";

import useAuth from "../../../hooks/useAuth";
import useValidate from "../../../hooks/useValidate";
import useAllert from "../../../hooks/useAllert";

import SubmitButton from "../../Button/SubmitButton";
import Allert from "../../Allert/Allert";

import "./AuthForm.scss";

const AuthForm = (props) => {
  const email = useRef();
  const password = useRef();
  const cnfPassword = useRef();
  const checkbox = useRef();

  const { authRequest } = useAuth();

  const { allert, allertType, allertText } = useAllert();

  const [isEmailValid, validateEmail, clearEmail] = useValidate({
    inputRef: email,
    isEmail: true,
    isEmpty: true,
  });

  const [isPasswordValid, validatePassword, clearPassword] = useValidate({
    inputRef: password,
    isEmpty: true,
  });

  const [isCnfPasswordValid, validateCnfPassword, clearCnfPassword] = useValidate({
    inputRef: cnfPassword,
    isEmpty: true,
    isEqualTo: password,
  });

  const userAuthHandler = async (event) => {
    event.preventDefault();

    const currentEmail = email.current.value;
    const currentPassword = password.current.value;
    const currentCnfPassword = props.currentForm === "signup"
        ? cnfPassword.current.value
        : true;
    const currentCheckbox = props.currentForm === "signup" 
        ? checkbox.current.value 
        : true;
        
    const validEmail = validateEmail();
    const validPassword = validatePassword();
    const validCnfPassword = props.currentForm === "signup" 
        ? validateCnfPassword()
        : false;

    if (validEmail && validPassword) {
      if(props.currentForm === "signup" && !validCnfPassword) {
        allert({ type: "fail", text: "Wpisz poprawne hasło" });
        return;
      }

      const authResponse = await authRequest({
        currentForm: props.currentForm,
        email: currentEmail,
        password: currentPassword,
        cnfPassword: currentCnfPassword,
        checkbox: currentCheckbox,
      });

      if(authResponse && props.currentForm === "signup") allert({ type: "succes", text: "Pomyślnie utworzono konto" });
      else if(authResponse) allert({ type: "succes", text: "Pomyślnie zalogowano" });
      else allert({ type: "fail", text: "Nie udało się zarejestrować" });
    }
    else allert({ type: "fail", text: "Popraw błędne pola" });
  };

  return (
    <div className="auth-form">
      <form onSubmit={userAuthHandler}>
        <div className="auth-form__content">
          <input
            onChange={clearEmail}
            onBlur={validateEmail}
            className={`auth-form__input ${
              !isEmailValid ? "auth-form__input--invalid" : ""
            }`}
            type="text"
            name="email"
            placeholder="e-mail"
            ref={email}
          />
        </div>
        <div className="auth-form__content">
          <input
            onChange={clearPassword}
            onBlur={validatePassword}
            className={`auth-form__input ${
              !isPasswordValid ? "auth-form__input--invalid" : ""
            }`}
            type="password"
            name="password"
            placeholder="hasło"
            ref={password}
          />
        </div>
        {props.currentForm === "signup" && (
          <div className="auth-form__content">
            <input
              onChange={clearCnfPassword}
              onBlur={validateCnfPassword}
              className={`auth-form__input ${
                !isCnfPasswordValid ? "auth-form__input--invalid" : ""
              }`}
              type="password"
              name="password"
              placeholder="powtórz hasło"
              ref={cnfPassword}
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
            <SubmitButton text={"Zaloguj się"} size={"large"} />
          )}
          {props.currentForm === "signup" && (
            <SubmitButton text={"Załóż konto"} size={"large"} />
          )}
        </div>
          {(allertType && allertText) && (
            <Allert type={allertType} text={allertText} />
          )} 
      </form>
    </div>
  );
};

export default AuthForm;
