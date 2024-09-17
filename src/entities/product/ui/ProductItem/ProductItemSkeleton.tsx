import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import styles from "./ProductItem.module.scss";

type tProps = {
  cards: number;
};

export const ProductItemSkeleton = ({ cards }: tProps) => {
  return Array(cards)
    .fill(0)
    .map((_, index) => (
      <div key={index} className={styles.item}>
        <Skeleton style={{ height: 0 }} className={styles.image} />
        <div className={styles.titleSkeleton}>
          <Skeleton />
        </div>
        <div className={styles.subtitleSkeleton}>
          <Skeleton />
        </div>
        <div className={styles.info}>
          <div className={styles.price}>
            <Skeleton width={100} />
          </div>
          <div className={styles.actions}>
            <Skeleton className={styles.action} circle={true} />
            <Skeleton className={styles.action} circle={true} />
          </div>
        </div>
      </div>
    ));
};
