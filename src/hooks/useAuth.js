import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import useData from "./useData";
import { login } from "../store/userAuth";

const useAuth = () => {
  const { dataRequest } = useData();

  const [error, setError] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authRequest = async (data) => {
    try {
      if (data.password !== data.cnfPassword)
        throw new Error("Wpisz poprawnie hasło");

      if (!data.checkbox) throw new Error("Zaznacz wymagane pole");

      const loginURL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDkqipfOWliQ3pu_Vuz3-5mVFQnpD3XRFU";
      const signupURL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDkqipfOWliQ3pu_Vuz3-5mVFQnpD3XRFU";

      const response = await fetch(
        `${data.currentForm === "login" ? loginURL : ""}${
          data.currentForm === "signup" ? signupURL : ""
        }`,
        {
          method: "POST",
          body: JSON.stringify({
            email: data.email,
            password: data.password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if(!response.ok) throw new Error("Błąd przy logowaniu");

      const resData = await response.json();

      navigate("/");

      localStorage.setItem("token", resData.localId);

      if (data.currentForm === "signup") {
        dataRequest({
          method: "POST",
          database: "users",
          body: {
            userId: resData.localId,
            email: data.email,
            name: "",
            surname: "",
            address: {
              city: "",
              street: "",
              zipcode: "",
            },
            cart: false,
            wishlist: false,
            admin: false,
          },
        });
      }

      dispatch(login(resData.localId));
    } 
    catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  return { authRequest, error};
};

export default useAuth;
