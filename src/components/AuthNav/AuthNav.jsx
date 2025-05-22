import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

const AuthNav = () => (
  <div className={styles.authNav}>
    <NavLink
      to="/register"
      className={({ isActive }) => (isActive ? styles.active : styles.link)}
    >
      Register
    </NavLink>
    <NavLink
      to="/login"
      className={({ isActive }) => (isActive ? styles.active : styles.link)}
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
