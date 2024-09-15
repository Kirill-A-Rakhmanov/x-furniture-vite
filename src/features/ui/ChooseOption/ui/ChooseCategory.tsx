// import React from "react";

// import styles from "./ChooseOption.module.scss";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  Option,
  selectFilter,
  setCategory,
  tCategoryOption,
} from "@/entities/entities";

type tProps = {
  option: tCategoryOption;
};

export const ChooseCategory = ({ option }: tProps) => {
  const dispatch = useAppDispatch();
  const { category } = useAppSelector(selectFilter);

  const handleClick = (category: string) => {
    dispatch(setCategory(category));
  };

  return (
    <Option
      onClick={() => handleClick(option.category)}
      title={option.title}
      active={option.category === category ? true : false}
    />
  );
};
