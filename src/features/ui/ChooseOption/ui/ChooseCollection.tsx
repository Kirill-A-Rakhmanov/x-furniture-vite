import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  Option,
  selectFilter,
  setCollection,
  tCollectionOption,
} from "@/entities/entities";
// import React from "react";

type tProps = {
  option: tCollectionOption;
};

export const ChooseCollection = ({ option }: tProps) => {
  const dispatch = useAppDispatch();
  const { collection } = useAppSelector(selectFilter);

  const handleClick = (collection: string) => {
    dispatch(setCollection(collection));
  };

  return (
    <Option
      onClick={() => handleClick(option.collection)}
      title={option.title}
      active={option.collection === collection ? true : false}
    />
  );
};
