import React from "react";

import styles from "./ScrollButton.module.scss";
import ArrowIcon from "@/assets/icons/arrow-right.svg";
import { tDirection } from "./types";

type Props = {
  direction: tDirection;
  onClick?: React.MouseEventHandler;
};

export const ScrollButton = ({ direction, onClick }: Props) => {
  return (
    <div onClick={onClick} className={styles.wrapper}>
      <ArrowIcon className={[styles.icon, styles[direction]].join(" ")} />
    </div>
  );
};
