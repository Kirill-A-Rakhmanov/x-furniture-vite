import { useAppDispatch } from "@/app/store/hooks";
import {
  decrementCartQuantity,
  removeFromCart,
  tSetQuantity,
} from "@/entities/entities";
import { MinusButton } from "@/shared/shared";
// import React from "react";

export const DecreaseCartQuantity = ({ article, quantity }: tSetQuantity) => {
  const dispatch = useAppDispatch();

  const handleClick = (article: string) => {
    if (quantity === 1) {
      dispatch(removeFromCart(article));
    } else {
      dispatch(decrementCartQuantity(article));
    }
  };

  return <MinusButton onClick={() => handleClick(article)} />;
};
