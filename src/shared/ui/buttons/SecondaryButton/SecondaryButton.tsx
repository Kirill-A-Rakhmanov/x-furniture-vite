import React from "react";

import styles from "./SecondaryButton.module.scss";

type tProps = {
  text: string;
  onClick: React.MouseEventHandler;
};

export const SecondaryButton = ({ text, onClick }: tProps) => {
  return (
    <button className={styles.wrapper} onClick={onClick}>
      <span className={styles.text}>{text}</span>
    </button>
  );
};
