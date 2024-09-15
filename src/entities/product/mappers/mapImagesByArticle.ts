import { tColor, tItem } from "../product";

export const mapImagesByArticle = (data: tItem, article: string) => {
  const findItem: tColor = data.colors.find((obj) => obj.article === article);
  if (findItem) {
    const images: string[] = data.measurements.image
      ? [...findItem.images, data.measurements.image]
      : findItem.images;

    return images as string[];
  }
  return [];
};
