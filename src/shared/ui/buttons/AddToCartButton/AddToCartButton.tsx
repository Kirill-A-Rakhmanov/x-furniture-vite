import React from "react";

import styles from "./AddToCartButton.module.scss";
import AddToCartIcon from "@/assets/icons/add-to-cart.svg";

type tProps = {
  onClick: React.MouseEventHandler;
};

export const AddToCartButton = ({ onClick }: tProps) => {
  return (
    <div onClick={onClick} className={styles.wrapper}>
      <AddToCartIcon className={styles.icon} />
    </div>
  );
};
