import {
  cartSlice,
  collectionSlice,
  favoriteSlice,
  filterSlice,
  optionsSlice,
  productItemSlice,
  productsSlice,
  searchSlice,
  trendingSlice,
} from "@/entities/entities";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    trending: trendingSlice.reducer,
    favorite: favoriteSlice.reducer,
    cart: cartSlice.reducer,
    products: productsSlice.reducer,
    filter: filterSlice.reducer,
    options: optionsSlice.reducer,
    productItem: productItemSlice.reducer,
    search: searchSlice.reducer,
    collection: collectionSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
