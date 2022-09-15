import "./AuthSelect.scss";

const AuthSelect = (props) => {
  return (
    <div className="auth-select">
      <div
        onClick={props.switchLoginForm}
        className={`auth-select__option ${
            props.currentForm === "login" && "auth-select__option--selected"
        }`}
      >
        <span>Zaloguj się</span>
      </div>
      <div
        onClick={props.switchSignupForm}
        className={`auth-select__option ${
            props.currentForm === "signup" && "auth-select__option--selected"
        }`}
      >
        <span>Załóż konto</span>
      </div>
    </div>
  );
};

export default AuthSelect;
