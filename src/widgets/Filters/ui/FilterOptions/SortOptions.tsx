// import React from "react";

// import styles from "./FilterOptions.module.scss";
import { ChooseSort } from "@/features/features";
import { tSortOption } from "@/entities/entities";

type tProps = {
  options: tSortOption[];
};

export const SortOptions = ({ options }: tProps) => {
  return (
    <>
      {options.map((obj, index) => (
        <ChooseSort key={index} option={obj} />
      ))}
    </>
  );
};
