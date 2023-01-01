import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { login } from "../store/userAuth";

const useAuth = () => {
  const [error, setError] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authRequest = async (data) => {
    try {
      const loginURL = "https://online-store-backend.onrender.com/api/users/login";
      const signupURL = "https://online-store-backend.onrender.com/api/users/signup";

      const response = await fetch(
        `${data.currentForm === "login" ? loginURL : ""}${
          data.currentForm === "signup" ? signupURL : ""
        }`,
        {
          method: "POST",
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if(!response.ok) throw new Error("Błąd przy logowaniu");

      const resData = await response.json();


      localStorage.setItem("token", resData.token);
      localStorage.setItem("userId", resData.userId);
      
      setTimeout(() => {
        dispatch(login({token :resData.token , userId :resData.userId}));
        navigate("/");
      }, 2000);

      return true;
    } 
    catch (error) {
      setError(error.message);
      return false;
    }
  };

  return { authRequest, error};
};

export default useAuth;
