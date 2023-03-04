import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { login } from "../store/userAuth";

const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const url = {
    login: {
      prod: "https://online-store-backend.onrender.com/api/users/login",
      dev: "http://localhost:5000/api/users/login",
    },
    signup: {
      prod: "https://online-store-backend.onrender.com/api/users/signup",
      dev: "http://localhost:5000/api/users/signup",
    },
  };

  const authRequest = (data) => {
    return axios
      .post(data.currentForm === "login" ? url.login.dev : url.signup.dev, {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);

        setTimeout(() => {
          dispatch(
            login({ token: response.data.token, userId: response.data.userId })
          );
          navigate("/");
        }, 2000);

        return true;
      });
  };

  return { authRequest };
};

export default useAuth;
