import styles from "./ProductSearch.module.scss";
import Skeleton from "react-loading-skeleton";

export const ProductSearchSkeleton = () => {
  return (
    <div className={styles.wrapper}>
      <Skeleton className={styles.image} />
      <div className={styles.info}>
        <Skeleton width={100} className={styles.title} />
        <Skeleton width={200} className={styles.subtitle} />
      </div>
    </div>
  );
};
