import { useAppDispatch } from "@/app/store/hooks";
import { incrementCartQuantity, tSetQuantity } from "@/entities/entities";
import { PlusButton } from "@/shared/shared";
// import React from "react";

export const IncreaseCartQuantity = ({ article, quantity }: tSetQuantity) => {
  const dispatch = useAppDispatch();
  const max = 999;

  const handleClick = (article: string) => {
    if (quantity < max) {
      dispatch(incrementCartQuantity(article));
    }
  };

  return <PlusButton onClick={() => handleClick(article)} />;
};
