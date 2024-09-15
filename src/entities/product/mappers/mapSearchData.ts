import { tItem, tItemSearch } from "../product";

export const mapSearchData = (item: tItem) => {
  return {
    article: item.colors[0].article,
    image: item.colors[0].images[0],
    title: item.title,
    subtitle: item.subtitle,
  } as tItemSearch;
};
