import {
  BuyModuleSkeleton,
  ColorPickerSkeleton,
  DescriptionSkeleton,
  ProductGallerySkeleton,
} from "@/widgets/widgets";

import styles from "./ProductBlock.module.scss";

export const ProductBlockSkeleton = () => {
  return (
    <>
      <ProductGallerySkeleton />
      <div className={styles.buyModule}>
        <BuyModuleSkeleton />
        <ColorPickerSkeleton />
      </div>
      <DescriptionSkeleton />
    </>
  );
};
