import React from "react";

import MinusIcon from "@/assets/icons/minus.svg";
import styles from "./MinusButton.module.scss";

type tProps = {
  onClick: React.MouseEventHandler;
};

export const MinusButton = ({ onClick }: tProps) => {
  return (
    <div onClick={onClick} className={styles.wrapper}>
      <MinusIcon className={styles.icon} />
    </div>
  );
};
