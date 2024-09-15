import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  addToFavorite,
  removeFromFavorite,
  selectFavoriteItems,
  tItemCard,
} from "@/entities/entities";
import { AddToFavoriteButton } from "@/shared/shared";
// import React from "react";

type tProps = {
  item: tItemCard;
};

export const AddToFavorite = ({ item }: tProps) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectFavoriteItems);

  const findItem = items.find((obj) => obj.article === item.article);

  const handleClick = (item: tItemCard) => {
    if (findItem) {
      dispatch(removeFromFavorite(item.article));
    } else {
      dispatch(addToFavorite(item));
    }
  };

  return (
    <AddToFavoriteButton
      active={findItem ? true : false}
      onClick={() => handleClick(item)}
    />
  );
};
