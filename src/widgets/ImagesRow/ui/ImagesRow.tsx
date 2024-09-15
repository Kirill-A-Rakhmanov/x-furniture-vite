import React from "react";

import styles from "./ImagesRow.module.scss";
import clsx from "clsx";

type tProps = {
  images: string[];
  activeIndex: number;
  onClick: React.MouseEventHandler;
};

export const ImagesRow = ({ images, activeIndex, onClick }: tProps) => {
  return (
    <div className={styles.content}>
      {images.map((url, index) => (
        <div
          key={index}
          data-index={index}
          onClick={onClick}
          className={clsx(
            styles.wrapper,
            activeIndex === index && styles.active
          )}
        >
          <div className={styles.image}>
            <img src={url} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};
