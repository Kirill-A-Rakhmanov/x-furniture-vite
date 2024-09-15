import React from "react";

import styles from "./SetQuantity.module.scss";
import {
  removeFromFavorite,
  setFavoriteQuantity,
  tSetQuantity,
} from "@/entities/entities";
import { useAppDispatch } from "@/app/store/hooks";

export const ChangeFavoriteQuantity = ({ article, quantity }: tSetQuantity) => {
  const dispatch = useAppDispatch();
  const inputRef = React.useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) > 999) {
      dispatch(
        setFavoriteQuantity({
          article,
          quantity: 999,
        })
      );
    } else if (Number(event.target.value) < 1) {
      dispatch(removeFromFavorite(article));
    } else {
      dispatch(
        setFavoriteQuantity({
          article,
          quantity: Number(event.target.value),
        })
      );
    }
  };

  return (
    <input
      className={styles.input}
      ref={inputRef}
      onChange={handleChange}
      type="number"
      min="1"
      max="999"
      value={quantity}
    />
  );
};
