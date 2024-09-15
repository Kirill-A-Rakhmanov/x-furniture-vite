import { queryParams } from "@/entities/entities";
import { mockApi } from "../api";
import { tItem, tItemCard } from "./types";

const PRODUCTS = "/products";

export const getItems = async (params?: queryParams) => {
  const data = await mockApi
    .get<tItem[]>(PRODUCTS, { params })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return [] as tItem[];
    });
  return data;
};

export const getItemById = async (id: string) => {
  const data = await mockApi
    .get<tItem>(`${PRODUCTS}/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return {} as tItem;
    });
  return data;
};

export const getItemByArticle = async (articles: string) => {
  const data = await mockApi
    .get<tItem[]>(PRODUCTS, { params: { articles } })
    .then((response) => {
      return response.data[0];
    })
    .catch((error) => {
      return {} as tItem;
    });
  return data;
};

export const calcTotalQuantity = (items: tItemCard[]) => {
  return items.reduce((sum: number, obj: tItemCard) => {
    return obj.quantity + sum;
  }, 0);
};

export const calcTotalPrice = (items: tItemCard[]) => {
  return items.reduce((sum: number, obj: tItemCard) => {
    return obj.price * obj.quantity + sum;
  }, 0);
};
