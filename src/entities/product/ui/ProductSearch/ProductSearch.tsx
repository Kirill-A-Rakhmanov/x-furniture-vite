import React from "react";

import styles from "./ProductSearch.module.scss";
import { Link } from "react-router-dom";
import { tItemSearch } from "../../product";

type tProps = {
  item: tItemSearch;
  onClick: React.MouseEventHandler;
};

export const ProductSearch = ({ item, onClick }: tProps) => {
  return (
    <Link
      onClick={onClick}
      className={styles.wrapper}
      to={`/product/${item.article}`}
    >
      <div className={styles.image}>
        <img src={item.image} alt={item.title} />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.subtitle}>{item.subtitle}</div>
      </div>
    </Link>
  );
};
