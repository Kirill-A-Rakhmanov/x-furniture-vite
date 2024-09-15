// import React from "react";

import styles from "./NoItems.module.scss";

import emptyCartImg from "@/assets/img/cart/empty-cart.png";
import { LinkButton } from "@/shared/shared";

export const NoItems = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <h3 className={styles.header}>Your cart is empty</h3>
        <div className={styles.subtitle}>
          When you add products to your cart, they will appear here.
        </div>
        <LinkButton link={"/favorite"} text={"View your favorite"} />
      </div>
      <div className={styles.image}>
        <img src={emptyCartImg} alt="empty cart" />
      </div>
    </div>
  );
};
