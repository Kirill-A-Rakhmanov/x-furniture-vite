import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/store/store";
import { tItemCard, tSetQuantity } from "../types";
import { calcTotalPrice, calcTotalQuantity } from "../services";

interface iFavoriteState {
  items: tItemCard[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: iFavoriteState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite(state, action: PayloadAction<tItemCard>) {
      const findItem = state.items.find(
        (obj) => obj.article === action.payload.article
      );
      if (findItem) {
        findItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity = calcTotalQuantity(state.items);
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeFromFavorite(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.article !== action.payload);
      state.totalQuantity = calcTotalQuantity(state.items);
      state.totalPrice = calcTotalPrice(state.items);
    },
    incrementFavoriteQuantity(state, action: PayloadAction<string>) {
      const findItem = state.items.find(
        (obj) => obj.article === action.payload
      );
      if (findItem) {
        findItem.quantity++;
      }
      state.totalQuantity = calcTotalQuantity(state.items);
      state.totalPrice = calcTotalPrice(state.items);
    },
    decrementFavoriteQuantity(state, action: PayloadAction<string>) {
      const findItem = state.items.find(
        (obj) => obj.article === action.payload
      );
      if (findItem) {
        findItem.quantity--;
      }
      state.totalQuantity = calcTotalQuantity(state.items);
      state.totalPrice = calcTotalPrice(state.items);
    },
    setFavoriteQuantity(state, action: PayloadAction<tSetQuantity>) {
      const findItem = state.items.find(
        (obj) => obj.article === action.payload.article
      );
      if (findItem) {
        findItem.quantity = action.payload.quantity;
      }
      state.totalQuantity = calcTotalQuantity(state.items);
      state.totalPrice = calcTotalPrice(state.items);
    },
  },
});

export const {
  addToFavorite,
  removeFromFavorite,
  incrementFavoriteQuantity,
  decrementFavoriteQuantity,
  setFavoriteQuantity,
} = favoriteSlice.actions;

export const selectFavoriteItems = (state: RootState) => state.favorite.items;
export const selectFavoriteQuantity = (state: RootState) =>
  state.favorite.totalQuantity;
export const selectFavoritePrice = (state: RootState) =>
  state.favorite.totalPrice;

export default favoriteSlice.reducer;
