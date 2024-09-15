import React from "react";

import styles from "./ProductItem.module.scss";

type tProps = {
  title: string;
  subtitle: string;
  size?: string;
  price: number;
  quantity: number;
  image: string;
  color: string;
  actionSetQuantity: React.ReactNode;
  actionAddToCart: React.ReactNode;
  actionRemoveFromFavorite: React.ReactNode;
};

export const ProductFavorite = React.memo((props: tProps) => {
  const {
    title,
    subtitle,
    color,
    size,
    price,
    quantity,
    image,
    actionSetQuantity,
    actionAddToCart,
    actionRemoveFromFavorite,
  } = props;

  //todo: добавиь сюда ссылку на страницу товара через Link и артикул
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{[subtitle, color].join(", ")}</div>
      <div className={styles.size}>{size ? size : " "}</div>
      {actionSetQuantity}
      <div className={styles.info}>
        <div className={styles.price}>{price * quantity} €</div>
        <div className={styles.actions}>
          {actionAddToCart}
          {actionRemoveFromFavorite}
        </div>
      </div>
    </div>
  );
});
