import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import useData from "../../../hooks/useData";
import { changeRequestStatus } from "../../../store/dataRequest";

import SubmitButton from "../../Button/SubmitButton";

import "./UserForm.scss";

const UserForm = (props) => {
  const [isChanged, setIsChanged] = useState(false);
  const dispatch = useDispatch();
  const { dataRequest } = useData();

  const name = useRef();
  const surname = useRef();
  const phone = useRef();
  const street = useRef();
  const code = useRef();
  const city = useRef();
  const email = useRef();
  const password = useRef();

  const changeHandler = () => {
    setIsChanged(true);
  };

  const cancleChangeHandler = () => {
    setIsChanged(false);
    console.log(props.userData)
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
    email.current.value = props.userData.email ? props.userData.email : "";
  };

  const submitHandler = (event) => {
    event.preventDefault();

    dataRequest({
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

    dispatch(changeRequestStatus());
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
              type={"text"}
              className="user-form__input"
              defaultValue={props.userData.name}
              ref={name}
            ></input>
          </div>
          <div className="user-form__item">
            <label className="user-form__label">nazwisko:</label>
            <input
              type={"text"}
              className="user-form__input"
              defaultValue={props.userData.surname}
              ref={surname}
            ></input>
          </div>
          <div className="user-form__item">
            <label className="user-form__label">telefon:</label>
            <input
              type={"text"}
              className="user-form__input"
              defaultValue={props.userData.phone}
              ref={phone}
            ></input>
          </div>
          <div className="user-form__item"></div>
          <div className="user-form__item"></div>
        </div>
        <div className="user-form__container">
          <div className="user-form__container">
            <div className="user-form__title">Dane zamieszkania</div>
            <div className="user-form__item">
              <label className="user-form__label">
                ulica i numer mieszkania:
              </label>
              <input
                type={"text"}
                className="user-form__input"
                defaultValue={props.userData.address.street}
                ref={street}
              ></input>
            </div>
            <div className="user-form__item">
              <label className="user-form__label">kod pocztowy:</label>
              <input
                type={"text"}
                className="user-form__input"
                defaultValue={props.userData.address.zipcode}
                ref={code}
              ></input>
            </div>
            <div className="user-form__item">
              <label className="user-form__label">miejscowość:</label>
              <input
                type={"text"}
                className="user-form__input"
                defaultValue={
                  props.userData.address.city && props.userData.address.city
                }
                ref={city}
              ></input>
            </div>
            <div className="user-form__item"></div>
            <div className="user-form__item"></div>
          </div>
        </div>
        <div className="user-form__container">
          <div className="user-form__container">
            <div className="user-form__title">Dane logowania</div>
            <div className="user-form__item">
              <label className="user-form__label">adres-email:</label>
              <input
                type={"text"}
                className="user-form__input"
                defaultValue={props.userData.email}
                ref={email}
                disabled
              ></input>
            </div>
            <div className="user-form__item">
              <label className="user-form__label">hasło:</label>
              <input
                type={"text"}
                className="user-form__input"
                ref={password}
                disabled
              ></input>
            </div>
            <div className="user-form__item"></div>
            <div className="user-form__item"></div>
          </div>
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
      </form>
    </div>
  );
};

export default UserForm;
