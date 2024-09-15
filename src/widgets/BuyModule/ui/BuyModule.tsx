// import React from "react";

import styles from "./BuyModule.module.scss";
import { tItemCard } from "@/entities/entities";
import { AddToFavorite } from "@/features/features";

type tProps = {
  item: tItemCard;
};

export const BuyModule = ({ item }: tProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.info}>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.subtitle}>
            {[item.subtitle, item.color].join(", ")}
            {item.size ? ", " + item.size : ""}
          </div>
        </div>
        <div className={styles.action}>
          <AddToFavorite item={item} />
        </div>
      </div>
      <div className={styles.price}>{item.price} €</div>
    </div>
  );
};
