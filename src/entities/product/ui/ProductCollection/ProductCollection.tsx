import React from "react";

import styles from "./ProductCollection.module.scss";
import { tItemCard } from "../../product";
import { Link } from "react-router-dom";

type tProps = {
  item: tItemCard;
  actionAddToCart: React.ReactNode;
  actionAddToFavorite: React.ReactNode;
};

export const ProductCollection = React.memo((props: tProps) => {
  const { item, actionAddToCart, actionAddToFavorite } = props;

  return (
    <div className={styles.wrapper}>
      <Link to={`/product/${item.article}`} className={styles.image}>
        <img src={item.image} alt={item.title} />
      </Link>
      <div className={styles.right}>
        <div className={styles.info}>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.subtitle}>{item.subtitle}</div>
          <div className={styles.price}>{item.price}</div>
        </div>
        <div className={styles.actions}>
          {actionAddToCart}
          {actionAddToFavorite}
        </div>
      </div>
    </div>
  );
});
