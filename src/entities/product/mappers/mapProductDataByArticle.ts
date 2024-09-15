import { tColor, tItemCard } from "./../model/types";
import { tItem } from "../product";

export const mapProductDataByArticle = (data: tItem, article: string) => {
  const findItem: tColor = data.colors.find((obj) => obj.article === article);

  if (findItem) {
    const obj: tItemCard = {
      id: data.id,
      title: data.title,
      subtitle: data.subtitle,
      size: data.size,
      price: findItem.price,
      article: article,
      color: findItem.color,
      image: findItem.images[0],
    };
    return obj as tItemCard;
  }

  return {} as tItemCard;
};
