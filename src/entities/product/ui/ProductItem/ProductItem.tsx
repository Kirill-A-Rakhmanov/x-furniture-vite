import React from "react";

import styles from "./ProductItem.module.scss";
import { Link } from "react-router-dom";

type tProps = {
  title: string;
  subtitle: string;
  price: number;
  image: string;
  article: string;
  actionAddToCart: React.ReactNode;
  actionAddToFavorite: React.ReactNode;
};

export const ProductItem = React.memo((props: tProps) => {
  const {
    title,
    subtitle,
    price,
    image,
    article,
    actionAddToCart,
    actionAddToFavorite,
  } = props;

  return (
    <div className={styles.item}>
      <Link to={`/product/${article}`} className={styles.image}>
        <img src={image} alt={title} />
      </Link>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
      <div className={styles.info}>
        <div className={styles.price}>{price} €</div>
        <div className={styles.actions}>
          {actionAddToCart}
          {actionAddToFavorite}
        </div>
      </div>
    </div>
  );
});
