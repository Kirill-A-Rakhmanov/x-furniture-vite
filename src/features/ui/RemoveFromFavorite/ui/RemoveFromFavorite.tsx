import { useAppDispatch } from "@/app/store/hooks";
import { removeFromFavorite } from "@/entities/entities";
import { TrashButton } from "@/shared/shared";
// import React from "react";

type tProps = {
  article: string;
};

export const RemoveFromFavorite = ({ article }: tProps) => {
  const dispatch = useAppDispatch();

  const handleClick = (article: string) => {
    dispatch(removeFromFavorite(article));
  };
  return <TrashButton onClick={() => handleClick(article)} />;
};
