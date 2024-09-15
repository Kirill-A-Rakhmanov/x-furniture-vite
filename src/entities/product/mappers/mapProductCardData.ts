import { tItemCard } from "./../model/types";
import { tItem } from "../product";

export const mapProductCardData = (data: tItem) => {
  const obj: tItemCard = {
    id: data.id,
    title: data.title,
    subtitle: data.subtitle,
    size: data.size,
    price: data.colors[0].price,
    article: data.articles[0],
    color: data.colors[0].color,
    image: data.colors[0].images[0],
  };
  return obj;
};
