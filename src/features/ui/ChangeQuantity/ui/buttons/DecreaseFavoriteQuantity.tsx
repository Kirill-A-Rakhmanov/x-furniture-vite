import { MinusButton } from "@/shared/shared";
// import React from "react";
import { useAppDispatch } from "@/app/store/hooks";
import {
  decrementFavoriteQuantity,
  removeFromFavorite,
  tSetQuantity,
} from "@/entities/entities";

export const DecreaseFavoriteQuantity = ({
  article,
  quantity,
}: tSetQuantity) => {
  const dispatch = useAppDispatch();

  const handleClick = (article: string) => {
    if (quantity === 1) {
      dispatch(removeFromFavorite(article));
    } else {
      dispatch(decrementFavoriteQuantity(article));
    }
  };

  return <MinusButton onClick={() => handleClick(article)} />;
};
