// import React from "react";

// import styles from "./ChooseOption.module.scss";
import {
  Option,
  selectFilter,
  setOrder,
  setSort,
  tOrder,
  tSortOption,
} from "@/entities/entities";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

type tProps = {
  option: tSortOption;
};

export const ChooseSort = ({ option }: tProps) => {
  const dispatch = useAppDispatch();
  const { sortby, order } = useAppSelector(selectFilter);

  const handleClick = (type: string, order: tOrder) => {
    dispatch(setSort(type));
    dispatch(setOrder(order));
  };

  return (
    <Option
      onClick={() => handleClick(option.sortType, option.order)}
      title={option.title}
      active={
        option.sortType === sortby && option.order === order ? true : false
      }
    />
  );
};
