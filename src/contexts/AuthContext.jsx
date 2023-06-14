import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toastNotify from "../utils/toastNotify";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [loginInput, setLoginInput] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const loginHandler = async (creds) => {
    if (creds.username && creds.password) {
      try {
        const { data, status } = await axios.post("/api/auth/login", {
          username: creds.username,
          password: creds.password,
        });

        if (status === 200) {
          localStorage.setItem("token", data.encodedToken);
          navigate("/landing");
          toastNotify("success", "You're successfully logged in!");
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      if (!creds.username && !creds.password) {
        toastNotify("error", "Please enter all the fields");
      } else if (!creds.username) {
        toastNotify("error", "username is empty");
      } else {
        toastNotify("error", "Password is empty");
      }
    }
  };

  //   const loginasGuest = () => {
  //     setLoginInput({ username: "bhumika27", password: "bhumi27" });
  //     loginHandler();
  //   };
  return (
    <AuthContext.Provider value={{ loginInput, setLoginInput, loginHandler }}>
      {children}
    </AuthContext.Provider>
  );
};
