import React from "react";

import styles from "./AddToFavoriteButton.module.scss";
import FavoriteIcon from "@/assets/icons/favorite.svg";
import FavoriteIconFilled from "@/assets/icons/favorite-filled.svg";

type tProps = {
  onClick?: React.MouseEventHandler;
  active?: boolean;
};

export const AddToFavoriteButton = ({ onClick, active }: tProps) => {
  return (
    <div onClick={onClick} className={styles.wrapper}>
      {active ? (
        <FavoriteIconFilled className={styles.icon} />
      ) : (
        <FavoriteIcon className={styles.icon} />
      )}
    </div>
  );
};
