import React from "react";

import styles from "./AddOneToCartButton.module.scss";

type tProps = {
  onClick: React.MouseEventHandler;
};

export const AddOneToCartButton = ({ onClick }: tProps) => {
  return (
    <div onClick={onClick} className={styles.wrapper}>
      <span className={styles.text}>Add to cart</span>
    </div>
  );
};
