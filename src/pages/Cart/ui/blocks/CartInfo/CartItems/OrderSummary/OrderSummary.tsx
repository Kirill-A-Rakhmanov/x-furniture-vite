// import React from "react";

import styles from "./OrderSummary.module.scss";

import ArrowForward from "@/assets/icons/arrow-forward.svg";
import { useAppSelector } from "@/app/store/hooks";
import { selectCartPrice } from "@/entities/entities";

export const OrderSummary = () => {
  const price = useAppSelector(selectCartPrice);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h3 className={styles.header}>Order summary</h3>
        <div className={styles.info}>
          <div className={styles.products}>
            <div className={styles.title}>Products</div>
            <div className={styles.productsPrice}>{price} €</div>
          </div>
          <div className={styles.total}>
            <div className={styles.subtotal}>Subtotal</div>
            <div className={styles.totalPrice}>{price} €</div>
          </div>
        </div>
        <button className={styles.button}>
          <div className={styles.buttonText}>Continue</div>
          <div className={styles.iconWrapper}>
            <ArrowForward className={styles.icon} />
          </div>
        </button>
      </div>
    </div>
  );
};
