import React from "react";

import styles from "./ProductGallery.module.scss";
import { ImagesRow, ScrollableArea } from "@/widgets/widgets";

type tProps = {
  images: string[];
};

export const ProductGallery = ({ images }: tProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleClick = (e: React.MouseEvent) => {
    setActiveIndex(Number(e.currentTarget.getAttribute("data-index")));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainImage}>
        <img src={images[activeIndex]} alt="" />
      </div>
      <ScrollableArea
        content={
          <ImagesRow
            activeIndex={activeIndex}
            onClick={handleClick}
            images={images}
          />
        }
      />
    </div>
  );
};
