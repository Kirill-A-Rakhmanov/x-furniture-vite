// import React from "react";

import { PlusButton } from "@/shared/shared";
import { useAppDispatch } from "@/app/store/hooks";
import { incrementFavoriteQuantity, tSetQuantity } from "@/entities/entities";

export const IncreaseFavoriteQuantity = ({
  article,
  quantity,
}: tSetQuantity) => {
  const dispatch = useAppDispatch();
  const max = 999;

  const handleClick = (article: string) => {
    if (quantity < max) {
      dispatch(incrementFavoriteQuantity(article));
    }
  };

  return <PlusButton onClick={() => handleClick(article)} />;
};
