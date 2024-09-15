import React from "react";

import PlusIcon from "@/assets/icons/plus.svg";
import styles from "./PlusButton.module.scss";

type tProps = {
  onClick: React.MouseEventHandler;
};

export const PlusButton = ({ onClick }: tProps) => {
  return (
    <div onClick={onClick} className={styles.wrapper}>
      <PlusIcon className={styles.icon} />
    </div>
  );
};
