import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import MethodItem from "./MethodItem";

import {setDeliveryMethod, setCustomerData, setPaymentMethod} from "../../store/orderData";

import "./Delivery.scss";

const Delivery = () => {
  const userData = useSelector((state) => state.userData.userData);
  const [payment, setPayment] = useState("Karta płatnicza online");
  const [delivery, setDelivery] = useState("Kurier - InPost, UPS, FedEx, DTS");
  const [changes, setChanges] = useState(false);

  const dispatch = useDispatch();

  const name = useRef();
  const surname = useRef();
  const street = useRef();
  const city = useRef();
  const zipcode = useRef();
  const phone = useRef();
  const email = useRef();

  useEffect(() => {
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
  }, [dispatch, delivery, payment, changes]);

  const makeChangeChandler = () => {
    setChanges(!changes);
  };

  return (
    <div className="delivery">
      <div className="delivery__data" onChange={makeChangeChandler}>
        <label className="delivery__label">Dane odbiorcy</label>
        <label className="delivery__label--small">imię:</label>
        <input
          type={"text"}
          defaultValue={userData.name}
          ref={name}
          className="delivery__input"
        />
        <label className="delivery__label--small">nazwisko:</label>
        <input
          type={"text"}
          defaultValue={userData.surname}
          ref={surname}
          className="delivery__input"
        />
        <label className="delivery__label--small">ulica i numer:</label>
        <input
          type={"text"}
          defaultValue={userData.address.street}
          ref={street}
          className="delivery__input"
        />
        <label className="delivery__label--small">miejscowość:</label>
        <input
          type={"text"}
          defaultValue={userData.address.city}
          ref={city}
          className="delivery__input"
        />
        <label className="delivery__label--small">kod pocztowy:</label>
        <input
          type={"text"}
          defaultValue={userData.address.zipcode}
          ref={zipcode}
          className="delivery__input"
        />
        <label className="delivery__label--small">email:</label>
        <input
          type={"text"}
          defaultValue={userData.email}
          ref={email}
          className="delivery__input"
        />
        <label className="delivery__label--small">numer telefonu:</label>
        <input
          type={"text"}
          defaultValue={userData.phone}
          ref={phone}
          className="delivery__input"
        />
      </div>
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
