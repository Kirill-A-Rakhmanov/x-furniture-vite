import { ProductItem, tItemCard } from "@/entities/entities";
import { AddToCart, AddToFavorite } from "@/features/features";
import React from "react";

type tProps = {
  itemData: tItemCard;
};

export const ProductCard = React.memo(({ itemData }: tProps) => {
  return (
    <ProductItem
      title={itemData.title}
      subtitle={itemData.subtitle}
      price={itemData.price}
      image={itemData.image}
      article={itemData.article}
      actionAddToCart={<AddToCart item={itemData} />}
      actionAddToFavorite={<AddToFavorite item={itemData} />}
    />
  );
});
