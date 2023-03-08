import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "react-query";

import { useOutletContext } from "react-router-dom";
import useData from "../../hooks/useData";

import useValidate from "../../hooks/useValidate";
import useAllert from "../../hooks/useAllert";

import MethodItem from "./MethodItem";
import Allert from "../../components/Allert/Allert";

import {
  setDeliveryMethod,
  setCustomerData,
  setPaymentMethod,
} from "../../store/orderData";

import "./Delivery.scss";

const Delivery = () => {
  const [payment, setPayment] = useState("Karta płatnicza online");
  const [delivery, setDelivery] = useState("Kurier - InPost, UPS, FedEx, DTS");

  const { allert, allertType, allertText } = useAllert();
  const { getUserData } = useData();

  const dispatch = useDispatch();

  const name = useRef();
  const surname = useRef();
  const street = useRef();
  const city = useRef();
  const zipcode = useRef();
  const phone = useRef();
  const email = useRef();

  const { data: userData, isLoading } = useQuery({
    queryKey: ["user-data"],
    queryFn: () => getUserData(),
  });

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
    inputRef: zipcode,
    isZipcode: true,
  });

  const [isCityValid, validateCity, clearCity] = useValidate({
    inputRef: city,
    isWord: true,
  });

  const [isEmailValid, validateEmail, clearEmail] = useValidate({
    inputRef: email,
    isEmail: true,
  });

  const validate = useOutletContext();

  const checkIsValidHandler = () => {
    const nameValid = validateName();
    const surnameValid = validateSurname();
    const codeValid = validateCode();
    const cityValid = validateCity();
    const streetValid = validateStreet();
    const emailValid = validateEmail();
    const nameVphone = validatePhone();

    if (
      nameValid &&
      surnameValid &&
      codeValid &&
      cityValid &&
      streetValid &&
      emailValid &&
      nameVphone
    ) {
      dispatch(setDeliveryMethod(delivery));
      dispatch(setPaymentMethod(payment));
      dispatch(
        setCustomerData({
          name: name.current.value,
          surname: surname.current.value,
          street: street.current.value,
          city: city.current.value,
          zipcode: zipcode.current.value,
          phone: phone.current.value,
          email: email.current.value,
        })
      );
      allert({ type: "succes", text: "Pomyślnie dokonano zmian" });
      return true;
    } else {
      allert({ type: "fail", text: "Popraw błędne pola" });
      return false;
    }
  };

  validate.current = checkIsValidHandler;

  return (
    <div className="delivery">
      <form className="delivery__data">
        <label className="delivery__label">Dane odbiorcy</label>
        <label className="delivery__label--small">imię:</label>
        <input
          onChange={clearName}
          type={"text"}
          defaultValue={(userData && userData.name) || ""}
          ref={name}
          className={`delivery__input ${
            !isNameValid ? "delivery__input--invalid" : ""
          }`}
        />
        <label className="delivery__label--small">nazwisko:</label>
        <input
          onChange={clearSurname}
          type={"text"}
          defaultValue={(userData && userData.surname) || ""}
          ref={surname}
          className={`delivery__input ${
            !isSurnameValid ? "delivery__input--invalid" : ""
          }`}
        />
        <label className="delivery__label--small">ulica i numer:</label>
        <input
          onChange={clearStreet}
          type={"text"}
          defaultValue={
            (userData && userData.address && userData.address.street) || ""
          }
          ref={street}
          className={`delivery__input ${
            !isStreetValid ? "delivery__input--invalid" : ""
          }`}
        />
        <label className="delivery__label--small">miejscowość:</label>
        <input
          onChange={clearCity}
          type={"text"}
          defaultValue={
            (userData && userData.address && userData.address.city) || ""
          }
          ref={city}
          className={`delivery__input ${
            !isCityValid ? "delivery__input--invalid" : ""
          }`}
        />
        <label className="delivery__label--small">kod pocztowy:</label>
        <input
          onChange={clearCode}
          type={"text"}
          defaultValue={
            (userData && userData.address && userData.address.zipcode) || ""
          }
          ref={zipcode}
          className={`delivery__input ${
            !isCodeValid ? "delivery__input--invalid" : ""
          }`}
        />
        <label className="delivery__label--small">email:</label>
        <input
          onChange={clearEmail}
          type={"text"}
          defaultValue={(userData && userData.email) || ""}
          ref={email}
          className={`delivery__input ${
            !isEmailValid ? "delivery__input--invalid" : ""
          }`}
        />
        <label className="delivery__label--small">numer telefonu:</label>
        <input
          onChange={clearPhone}
          type={"text"}
          defaultValue={(userData && userData.phone) || ""}
          ref={phone}
          className={`delivery__input ${
            !isPhoneValid ? "delivery__input--invalid" : ""
          }`}
        />
        {allertType && allertText && (
          <Allert type={allertType} text={allertText} />
        )}
      </form>
      <div className="delivery__data">
        <label className="delivery__label">Sposób dostawy</label>
        <div className="delivery__method">
          <MethodItem
            text={"Kurier - InPost, UPS, FedEx, DTS"}
            icon={<i className="fa-solid fa-truck"></i>}
            currentMethod={delivery}
            setNewMethod={setDelivery}
          />
          <MethodItem
            text={"Odbiór w salonie online-store"}
            icon={<i className="fa-solid fa-store"></i>}
            currentMethod={delivery}
            setNewMethod={setDelivery}
          />
          <MethodItem
            text={"Paczkomaty 24/7"}
            icon={<i className="fa-solid fa-envelopes-bulk"></i>}
            currentMethod={delivery}
            setNewMethod={setDelivery}
          />
        </div>
        <label className="delivery__label">Metoda płatności</label>
        <div className="delivery__method">
          <MethodItem
            text={"Karta płatnicza online"}
            icon={<i className="fa-brands fa-cc-visa"></i>}
            currentMethod={payment}
            setNewMethod={setPayment}
          />
          <MethodItem
            text={"PayPal"}
            icon={<i className="fa-brands fa-cc-paypal"></i>}
            currentMethod={payment}
            setNewMethod={setPayment}
          />
          <MethodItem
            text={"Przy odbiorze"}
            icon={<i className="fa-solid fa-wallet"></i>}
            currentMethod={payment}
            setNewMethod={setPayment}
          />
        </div>
      </div>
    </div>
  );
};

export default Delivery;
