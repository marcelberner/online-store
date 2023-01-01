import { useState } from "react";

const useValidate = (props) => {
  const [isValid, setIsValid] = useState(true);

  let isEmptyValid = true;
  let isEmailValid = true;
  let isEqualToValid = true;
  let isWordValid = true;
  let isZipcodeValid = true;
  let isPhoneValid = true;
  let isStreetValid = true;

  const clear = () => {
    setIsValid(true);
  };

  const isEqualTo = (input_1, input_2) => {
    if (input_1 !== input_2) isEqualToValid = false;
  };

  const isEmpty = (value) => {
    if (value.trim().length === 0) isEmptyValid = false;
  };

  const isWord = (value) => {
    const validInput = /^[A-z ]+$/.test(value);

    if (!validInput) isWordValid = false;
  };

  const isZipcode = (value) => {
    const validInput = /^([0-9]{2})[-]?([0-9]{3})$/.test(value);

    if (!validInput) isZipcodeValid = false;
  };

  const isPhone = (value) => {
    const validInput =
      /^([+][0-9]{2})?[-]?([0-9]{3})[-]?([0-9]{3})[-]?([0-9]{3})$/.test(value);

    if (!validInput) isPhoneValid = false;
  };

  const isStreet = (value) => {
    const validInput = /^[A-z ]+[0-9]{1,3}([A-z]?[/][0-9]{1,3})?$/.test(value);

    if (!validInput) isPhoneValid = false;
  };

  const isEmail = (value) => {
    const validEmail = value
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

    if (!validEmail) isEmailValid = false;
  };

  const validate = () => {
    const inputValue = props.inputRef.current.value;

    if (props.isEmpty) isEmpty(inputValue);
    if (props.isEmail) isEmail(inputValue);
    if (props.isWord) isWord(inputValue);
    if (props.isEqualTo) isEqualTo(inputValue, props.isEqualTo.current.value);
    if (props.isZipcode) isZipcode(inputValue);
    if (props.isPhone) isPhone(inputValue);
    if (props.isStreet) isStreet(inputValue);

    if (
      isEmptyValid &&
      isEmailValid &&
      isEqualToValid &&
      isWordValid &&
      isZipcodeValid &&
      isPhoneValid &&
      isStreetValid
    )
      return true;
    else {
      setIsValid(false);
      return false;
    }
  };
  return [isValid, validate, clear];
};

export default useValidate;
