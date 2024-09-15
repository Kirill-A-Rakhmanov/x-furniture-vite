// import React from "react";

import styles from "./Description.module.scss";
import { mapMeasurementsByArticle, tItem } from "@/entities/entities";
import { Measurements } from "@/widgets/widgets";

type tProps = {
  item: tItem;
  article: string;
};

export const Description = ({ item, article }: tProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>{item.description}</div>
      <div className={styles.article}>
        <span className={styles.title}>Article number</span>
        <div className={styles.value}>{article}</div>
      </div>
      <Measurements measurements={mapMeasurementsByArticle(item, article)} />
    </div>
  );
};
