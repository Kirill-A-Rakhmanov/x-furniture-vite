import React from "react";

import { ProductItemSkeleton, Status, tItemCard } from "@/entities/entities";
import { ProductCard } from "@/widgets/widgets";

// import styles from "./ItemsRow.module.scss";

type tProps = {
  items: tItemCard[];
  status: Status;
};

export const ProductRow = React.memo(({ items, status }: tProps) => {
  return (
    <>
      {status !== "success" ? (
        <ProductItemSkeleton cards={8} />
      ) : (
        items.map((obj) => <ProductCard key={obj.article} itemData={obj} />)
      )}
    </>
  );
});
