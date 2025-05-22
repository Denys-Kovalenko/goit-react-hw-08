import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/authSelectors";
import { logout } from "../../redux/auth/authOperations";
import styles from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.container}>
      <p className={styles.greeting}>Welcome, {user.name}</p>
      <button className={styles.button} onClick={onLogout} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
