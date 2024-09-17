import styles from "./ColorPicker.module.scss";
import Skeleton from "react-loading-skeleton";

export const ColorPickerSkeleton = () => {
  return (
    <div className={styles.wrapper}>
      <Skeleton className={styles.title} />
      <Skeleton className={styles.color} />
      <div className={styles.options}>
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} className={styles.optionSkeleton} />
          ))}
      </div>
      <div className={styles.action}>
        <Skeleton className={styles.buttonSkeleton} />
      </div>
    </div>
  );
};
