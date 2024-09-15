import { tColor, tItem } from "@/entities/entities";

export const mapColorOptions = (data: tItem, article: string) => {
  const findItem: tColor = data.colors.find((obj) => obj.article === article);
  if (findItem) {
    const colorOptions: tColor[] = data.colors;
    return colorOptions;
  }
  return [];
};
