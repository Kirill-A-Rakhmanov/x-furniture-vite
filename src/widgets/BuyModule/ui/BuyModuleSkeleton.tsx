// import React from "react";

import styles from "./BuyModule.module.scss";
import Skeleton from "react-loading-skeleton";

export const BuyModuleSkeleton = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.info}>
          <Skeleton className={styles.title} />
          <Skeleton className={styles.subtitle} />
        </div>
        <div className={styles.action}>
          <Skeleton circle={true} height={40} width={40} />
        </div>
      </div>
      <Skeleton className={styles.price} />
    </div>
  );
};
