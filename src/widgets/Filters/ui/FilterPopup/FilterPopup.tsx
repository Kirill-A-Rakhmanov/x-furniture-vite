import React from "react";

import styles from "./FilterPopup.module.scss";
import CloseIcon from "@/assets/icons/close.svg";

type tProps = {
  title: string;
  list: React.ReactNode;
  closePopup: React.MouseEventHandler;
};

export const FilterPopup = ({ list, title, closePopup }: tProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.text}>{title}</div>
        <CloseIcon className={styles.icon} onClick={closePopup} />
      </div>
      <ul className={styles.options}>{list}</ul>
    </div>
  );
};
