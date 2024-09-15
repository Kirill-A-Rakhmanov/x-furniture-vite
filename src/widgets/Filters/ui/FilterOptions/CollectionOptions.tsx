import { tCollectionOption } from "@/entities/entities";
import { ChooseCollection } from "@/features/features";
// import React from "react";

type tProps = {
  options: tCollectionOption[];
};

export const CollectionOptions = ({ options }: tProps) => {
  return (
    <>
      {options.map((obj, index) => (
        <ChooseCollection key={index} option={obj} />
      ))}
    </>
  );
};
