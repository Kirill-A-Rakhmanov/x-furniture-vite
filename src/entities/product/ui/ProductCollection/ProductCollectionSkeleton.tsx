// import React from "react";

import styles from "./ProductCollection.module.scss";
import Skeleton from "react-loading-skeleton";

export const ProductCollectionSkeleton = () => {
  return (
    <div className={styles.wrapper}>
      <Skeleton className={styles.image} />
      <div className={styles.right}>
        <div className={styles.info}>
          <Skeleton className={styles.title} />
          <Skeleton className={styles.subtitle} />
          <Skeleton className={styles.price} />
        </div>
        <div className={styles.actions}>
          <Skeleton circle={true} height={40} width={40} />
          <Skeleton circle={true} height={40} width={40} />
        </div>
      </div>
    </div>
  );
};
