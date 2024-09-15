import { ScrollButton } from "@/shared/shared";
import React from "react";

type tProps = {
  onClick: React.MouseEventHandler;
};

export const ScrollLeft = ({ onClick }: tProps) => {
  return <ScrollButton onClick={onClick} direction={"left"} />;
};
