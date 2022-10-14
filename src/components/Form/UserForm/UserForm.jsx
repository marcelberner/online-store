import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import useData from "../../../hooks/useData";
import useValidate from "../../../hooks/useValidate";
import useAllert from "../../../hooks/useAllert";

import { changeRequestStatus } from "../../../store/dataRequest";

import SubmitButton from "../../Button/SubmitButton";
import Allert from "../../Allert/Allert";

import "./UserForm.scss";

const UserForm = (props) => {
  const [isChanged, setIsChanged] = useState(false);

  const { dataRequest } = useData();

  const { allert, allertType, allertText } = useAllert();

  const dispatch = useDispatch();

  const name = useRef();
  const surname = useRef();
  const phone = useRef();
  const street = useRef();
  const code = useRef();
  const city = useRef();

  const [isNameValid, validateName, clearName] = useValidate({
    inputRef: name,
    isWord: true,
  });

  const [isSurnameValid, validateSurname, clearSurname] = useValidate({
    inputRef: surname,
    isWord: true,
  });

  const [isPhoneValid, validatePhone, clearPhone] = useValidate({
    inputRef: phone,
    isPhone: true,
  });

  const [isStreetValid, validateStreet, clearStreet] = useValidate({
    inputRef: street,
    isStreet: true,
  });

  const [isCodeValid, validateCode, clearCode] = useValidate({
    inputRef: code,
    isZipcode: true,
  });

  const [isCityValid, validateCity, clearCity] = useValidate({
    inputRef: city,
    isWord: true,
  });

  const changeHandler = () => {
    setIsChanged(true);
  };

  const cancleChangeHandler = () => {
    setIsChanged(false);
    name.current.value = props.userData.name ? props.userData.name : "";
    surname.current.value = props.userData.surname
      ? props.userData.surname
      : "";
    phone.current.value = props.userData.phone ? props.userData.phone : "";
    street.current.value = props.userData.address.street
      ? props.userData.address.street
      : "";
    code.current.value = props.userData.address.zipcode
      ? props.userData.address.zipcode
      : "";
    city.current.value = props.userData.address.city
      ? props.userData.address.city
      : "";

      clearCity();
      clearCode();
      clearName();
      clearPhone();
      clearStreet();
      clearSurname();
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const validName = validateName();
    const validSurname = validateSurname();
    const validPhone = validatePhone();
    const validCode = validateCode();
    const validStreet = validateStreet();
    const validCity = validateCity();

    if (
      validName &&
      validSurname &&
      validPhone &&
      validCode &&
      validStreet &&
      validCity
    ) {
      const responnse = dataRequest({
        method: "PATCH",
        database: `users/${props.userData.id}`,
        body: {
          address: {
            city: city.current.value,
            zipcode: code.current.value,
            street: street.current.value,
          },
          name: name.current.value,
          surname: surname.current.value,
          phone: phone.current.value,
        },
      });

      setIsChanged(false);
      dispatch(changeRequestStatus());
      if(responnse) allert({ type: "succes", text: "Pomyślnie dokonano zmian" });
    }
    else allert({ type: "fail", text: "Popraw błędne pola" });
  };

  return (
    <div className="user-form">
      <form
        className="user-form__form"
        onChange={changeHandler}
        onSubmit={submitHandler}
      >
        <div className="user-form__container">
          <div className="user-form__title">Podstawowe dane konta</div>
          <div className="user-form__item">
            <label className="user-form__label">imię:</label>
            <input
              onChange={clearName}
              type={"text"}
              className={`user-form__input ${
                !isNameValid ? "user-form__input--invalid" : ""
              }`}
              defaultValue={props.userData.name}
              ref={name}
            ></input>
          </div>
          <div className="user-form__item">
            <label className="user-form__label">nazwisko:</label>
            <input
              onChange={clearSurname}
              type={"text"}
              className={`user-form__input ${
                !isSurnameValid ? "user-form__input--invalid" : ""
              }`}
              defaultValue={props.userData.surname}
              ref={surname}
            ></input>
          </div>
          <div className="user-form__item">
            <label className="user-form__label">telefon:</label>
            <input
              onChange={clearPhone}
              type={"text"}
              className={`user-form__input ${
                !isPhoneValid ? "user-form__input--invalid" : ""
              }`}
              defaultValue={props.userData.phone}
              ref={phone}
            ></input>
          </div>
          <div className="user-form__item"></div>
          <div className="user-form__item"></div>
        </div>

        <div className="user-form__container">
          <div className="user-form__title">Dane zamieszkania</div>
          <div className="user-form__item">
            <label className="user-form__label">
              ulica i numer mieszkania:
            </label>
            <input
              onChange={clearStreet}
              type={"text"}
              className={`user-form__input ${
                !isStreetValid ? "user-form__input--invalid" : ""
              }`}
              defaultValue={props.userData.address.street}
              ref={street}
            ></input>
          </div>
          <div className="user-form__item">
            <label className="user-form__label">kod pocztowy:</label>
            <input
              onChange={clearCode}
              type={"text"}
              className={`user-form__input ${
                !isCodeValid ? "user-form__input--invalid" : ""
              }`}
              defaultValue={props.userData.address.zipcode}
              ref={code}
            ></input>
          </div>
          <div className="user-form__item">
            <label className="user-form__label">miejscowość:</label>
            <input
              onChange={clearCity}
              type={"text"}
              className={`user-form__input ${
                !isCityValid ? "user-form__input--invalid" : ""
              }`}
              defaultValue={
                props.userData.address.city && props.userData.address.city
              }
              ref={city}
            ></input>
          </div>
          <div className="user-form__item"></div>
          <div className="user-form__item"></div>
        </div>
        <div className="user-form__container">
          <div className="user-form__title">Dane logowania</div>
          <div className="user-form__item">
            <label className="user-form__label">adres-email:</label>
            <input
              type={"text"}
              className="user-form__input"
              defaultValue={props.userData.email}
              disabled
            ></input>
          </div>
          <div className="user-form__item">
            <label className="user-form__label">hasło:</label>
            <input type={"text"} className="user-form__input" disabled></input>
          </div>
          <div className="user-form__item"></div>
          <div className="user-form__item"></div>
        </div>
        <div className="user-form__buttons">
          {isChanged && <SubmitButton text={"Zatwierdź"} size={"small"} />}
          {isChanged && (
            <SubmitButton
              text={"Anuluj"}
              size={"small"}
              action={cancleChangeHandler}
            />
          )}
        </div>
        {allertType && allertText && (
          <Allert type={allertType} text={allertText} />
        )}
      </form>
    </div>
  );
};

export default UserForm;
