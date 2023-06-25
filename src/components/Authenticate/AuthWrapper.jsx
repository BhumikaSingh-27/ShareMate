import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import Home from "../../pages/Home/Home";

const AuthWrapper = ({ children }) => {
  const { encodedToken } = useContext(DataContext);
  const location = useLocation();

  return encodedToken ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
};

export default AuthWrapper;
