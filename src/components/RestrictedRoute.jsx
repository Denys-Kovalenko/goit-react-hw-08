import React from "react";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ isLoggedIn, redirectTo = "/", children }) =>
  !isLoggedIn ? children : <Navigate to={redirectTo} />;

export default RestrictedRoute;
