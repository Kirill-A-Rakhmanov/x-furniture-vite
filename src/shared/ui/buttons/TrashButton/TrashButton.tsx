import React from "react";

import styles from "./TrashButton.module.scss";
import TrashIcon from "@/assets/icons/trash.svg";

type tProps = {
  onClick: React.MouseEventHandler;
};

export const TrashButton = ({ onClick }: tProps) => {
  return (
    <div onClick={onClick} className={styles.wrapper}>
      <TrashIcon className={styles.icon} />
    </div>
  );
};
