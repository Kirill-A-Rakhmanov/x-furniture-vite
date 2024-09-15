import React from "react";

import styles from "./CurrentFilterButton.module.scss";
import CloseIcon from "@/assets/icons/close.svg";

type tProps = {
  text: string;
  onClick: React.MouseEventHandler;
};

export const CurrentFilterButton = ({ text, onClick }: tProps) => {
  return (
    <button onClick={onClick} className={styles.wrapper}>
      <CloseIcon className={styles.icon} />
      <span className={styles.text}>{text}</span>
    </button>
  );
};
