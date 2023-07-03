import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";

const AuthWrapper = ({ children }) => {
  const { encodedToken } = useContext(DataContext);

  console.log(encodedToken, "wrap");
  return encodedToken ? children : <Navigate to="/" />;
};
// state={{ from: location }}
export default AuthWrapper;
