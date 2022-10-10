import { useState } from "react";

const useValidate = (props) => {
  const [isValid, setIsValid] = useState(true);
  let isEmptyValid = true;
  let isEmailValid = true;

  const clear = () => {
    setIsValid(true);
  };

  const isEmpty = (value) => {
    if (value.trim().length === 0) isEmptyValid = false;
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
    if (props.isEmpty) isEmpty(props.inputRef.current.value);
    if (props.isEmail) isEmail(props.inputRef.current.value);

    if (isEmptyValid && isEmailValid) return true;
    else {
      setIsValid(false);
      return false;
    }
  };
  return [isValid, validate, clear];
};

export default useValidate;
