import { ProductCart, tItemCard } from "@/entities/entities";
import { AddToFavorite, RemoveFromCart } from "@/features/features";
import { SetCartQuantity } from "@/widgets/widgets";
// import React from "react";

type tProps = {
  itemData: tItemCard;
};

export const CartItem = ({ itemData }: tProps) => {
  return (
    <ProductCart
      id={itemData.id}
      title={itemData.title}
      subtitle={itemData.subtitle}
      color={itemData.color}
      size={itemData.size}
      price={itemData.price}
      image={itemData.image}
      quantity={itemData.quantity!}
      article={itemData.article}
      actionAddToFavorite={<AddToFavorite item={itemData} />}
      actionRemoveFromCart={<RemoveFromCart article={itemData.article} />}
      actionSetQuantity={
        <SetCartQuantity
          quantity={itemData.quantity!}
          article={itemData.article}
        />
      }
    />
  );
};
