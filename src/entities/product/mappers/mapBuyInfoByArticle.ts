import { tColor, tItem, tItemBuyInfo } from "../product";

export const mapBuyInfoByArticle = (data: tItem, article: string) => {
  const findItem: tColor = data.colors.find((obj) => obj.article === article);

  if (findItem) {
    const buyInfo: tItemBuyInfo = data.size
      ? {
          title: data.title,
          subtitle: data.subtitle,
          color: findItem.color,
          price: findItem.price,
          size: data.size,
        }
      : {
          title: data.title,
          subtitle: data.subtitle,
          color: findItem.color,
          price: findItem.price,
        };
    return buyInfo;
  }
  return {};
};
