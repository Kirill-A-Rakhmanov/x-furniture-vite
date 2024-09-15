// import React from "react";

import styles from "./CartRow.module.scss";
import { useAppSelector } from "@/app/store/hooks";
import { selectCartItems, tItemCard } from "@/entities/entities";
import { CartItem } from "@/widgets/widgets";

export const CartRow = () => {
  const items: tItemCard[] = useAppSelector(selectCartItems);

  return (
    <div className={styles.wrapper}>
      {items.map((obj) => (
        <CartItem key={obj.article} itemData={obj} />
      ))}
    </div>
  );
};
