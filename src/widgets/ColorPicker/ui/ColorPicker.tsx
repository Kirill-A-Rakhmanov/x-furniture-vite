// import React from "react";

import styles from "./ColorPicker.module.scss";
import { tColor, tItemCard } from "@/entities/entities";
import { Link } from "react-router-dom";
import { AddOneToCart } from "@/features/features";
import clsx from "clsx";

type tProps = {
  colorOptions: tColor[];
  article: string;
  item: tItemCard;
};

export const ColorPicker = ({ colorOptions, article, item }: tProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Choose color</div>
      <div className={styles.color}>{item.color}</div>
      <div className={styles.options}>
        {colorOptions.map((option, index) => (
          <Link
            to={`/product/${option.article}`}
            key={index}
            className={clsx(
              styles.option,
              article === option.article && styles.active
            )}
          >
            <div className={styles.image}>
              <img src={option.images[0]} alt={option.color} />
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.action}>
        <AddOneToCart item={item} />
      </div>
    </div>
  );
};
