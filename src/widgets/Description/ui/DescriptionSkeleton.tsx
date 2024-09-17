import styles from "./Description.module.scss";
import Skeleton from "react-loading-skeleton";

export const DescriptionSkeleton = () => {
  return (
    <div className={styles.wrapper}>
      <Skeleton count={3} className={styles.text} />
      <div className={styles.article}>
        <Skeleton className={styles.title} />
        <Skeleton className={styles.valueSkeleton} />
      </div>
      <Skeleton className={styles.measurementsSkeleton} />
    </div>
  );
};
