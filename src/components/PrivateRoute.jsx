import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isLoggedIn, redirectTo = "/", children }) =>
  isLoggedIn ? children : <Navigate to={redirectTo} />;

export default PrivateRoute;
