import React from "react";

import AddToCartIcon from "@/assets/icons/add-to-cart.svg";

import styles from "./AddAllToCactButton.module.scss";

type tProps = {
  onClick: React.MouseEventHandler;
};

export const AddAllToCartButton = ({ onClick }: tProps) => {
  return (
    <div onClick={onClick} className={styles.wrapper}>
      <AddToCartIcon className={styles.icon} />
      <span className={styles.text}>Add all to cart</span>
    </div>
  );
};
