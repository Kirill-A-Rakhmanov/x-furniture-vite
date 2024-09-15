// import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header/header";
import { Footer } from "./Footer/footer";

import "@/scss/app.scss";
import styles from "./Layout.module.scss";

export const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.page}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
