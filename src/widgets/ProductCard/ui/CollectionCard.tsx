import {
  getItemByArticle,
  mapProductCardData,
  ProductCollection,
  ProductCollectionSkeleton,
  tItemCard,
} from "@/entities/entities";
import { AddToCart, AddToFavorite } from "@/features/features";
import React from "react";

type tProps = {
  article: string;
};

export const CollectionCard = ({ article }: tProps) => {
  const [item, setItem] = React.useState<tItemCard>();

  React.useEffect(() => {
    getItemByArticle(article).then((res) => setItem(mapProductCardData(res)));
  }, []);

  return item ? (
    <ProductCollection
      item={item}
      actionAddToFavorite={<AddToFavorite item={item} />}
      actionAddToCart={<AddToCart item={item} />}
    />
  ) : (
    <ProductCollectionSkeleton />
  );
};
