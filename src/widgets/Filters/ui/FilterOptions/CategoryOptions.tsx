import { tCategoryOption } from "@/entities/entities";
import { ChooseCategory } from "@/features/features";
// import React from "react";

type tProps = {
  options: tCategoryOption[];
};

export const CategoryOptions = ({ options }: tProps) => {
  return (
    <>
      {options.map((obj, index) => (
        <ChooseCategory key={index} option={obj} />
      ))}
    </>
  );
};
