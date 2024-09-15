// import React from "react";

import styles from "./ProductBlock.module.scss";
import { useAppSelector } from "@/app/store/hooks";
import {
  mapImagesByArticle,
  mapProductDataByArticle,
  selectProductItem,
  Status,
} from "@/entities/entities";
import {
  BuyModule,
  ColorPicker,
  Description,
  ProductGallery,
} from "@/widgets/widgets";
import { ProductBlockSkeleton } from "./ProductBlockSkeleton";
import { Container } from "@/shared/shared";

type tProps = {
  article: string;
};

export const ProductBlock = ({ article }: tProps) => {
  const { item, status } = useAppSelector(selectProductItem);

  return (
    <section className={styles.productBlock}>
      <Container className={styles.container}>
        <div className={styles.content}>
          {status === Status.SUCCESS ? (
            <>
              <ProductGallery images={mapImagesByArticle(item, article)} />
              <div className={styles.buyModule}>
                <BuyModule item={mapProductDataByArticle(item, article)} />
                <ColorPicker
                  item={mapProductDataByArticle(item, article)}
                  article={article}
                  colorOptions={item.colors}
                />
              </div>
              <Description item={item} article={article} />
            </>
          ) : (
            <ProductBlockSkeleton />
          )}
        </div>
      </Container>
    </section>
  );
};
