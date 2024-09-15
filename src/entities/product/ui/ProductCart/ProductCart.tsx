import React from "react";

import styles from "./ProductCart.module.scss";
import { Link } from "react-router-dom";

type tProps = {
  id: string;
  title: string;
  subtitle: string;
  size?: string;
  price: number;
  article: string;
  quantity: number;
  image: string;
  color: string;
  actionSetQuantity: React.ReactNode;
  actionAddToFavorite: React.ReactNode;
  actionRemoveFromCart: React.ReactNode;
};

export const ProductCart = React.memo((props: tProps) => {
  const {
    title,
    subtitle,
    color,
    price,
    article,
    quantity,
    image,
    actionSetQuantity,
    actionAddToFavorite,
    actionRemoveFromCart,
  } = props;

  //todo: добавиь сюда ссылку на страницу товара через Link и артикул
  //todo: Добавить отображение размера, если он есть
  return (
    <div className={styles.wrapper}>
      <div className={styles.visuals}>
        <Link to={`/product/${article}`} className={styles.image}>
          <img src={image} alt={title} />
        </Link>
        <div className={styles.article}>{article}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoTop}>
          <div className={styles.text}>
            <div className={styles.title}>{title}</div>
            <div className={styles.subtitle}>
              {[subtitle, color].join(", ")}
            </div>
          </div>
          <div className={styles.price}>{price * quantity} €</div>
        </div>
        <div className={styles.infoBottom}>
          <div className={styles.actions}>
            {actionSetQuantity}
            {actionAddToFavorite}
            {actionRemoveFromCart}
          </div>
        </div>
      </div>
    </div>
  );
});

//  + size ? `, ${size}` : ""
