import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import styles from "./Layout.module.css";

const Layout = () => (
  <>
    <AppBar />
    <main className={styles.main}>
      <Outlet />
    </main>
  </>
);

export default Layout;
