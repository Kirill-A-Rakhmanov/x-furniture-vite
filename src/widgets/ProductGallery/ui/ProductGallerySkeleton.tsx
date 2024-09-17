import styles from "./ProductGallery.module.scss";
import Skeleton from "react-loading-skeleton";

export const ProductGallerySkeleton = () => {
  return (
    <div className={styles.wrapper}>
      <Skeleton style={{ height: 0 }} className={styles.mainImage} />
      <div className={styles.containerSkeleton}>
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} className={styles.imgSkeleton} />
          ))}
      </div>
    </div>
  );
};
