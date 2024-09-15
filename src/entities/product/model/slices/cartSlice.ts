import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/store/store";
import { tItemCard, tSetQuantity } from "../types";
import { calcTotalPrice, calcTotalQuantity } from "../services";

interface iCartState {
  items: tItemCard[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: iCartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<tItemCard>) {
      const findItem = state.items.find(
        (obj) => obj.article === action.payload.article
      );
      if (!findItem) {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity = calcTotalQuantity(state.items);
      state.totalPrice = calcTotalPrice(state.items);
    },
    addItemsToCart(state, action: PayloadAction<tItemCard[]>) {
      action.payload.map((item) => {
        const findItem = state.items.find(
          (obj) => obj.article === item.article
        );
        if (!findItem) {
          state.items.push({ ...item, quantity: 1 });
        }
      });
      state.totalQuantity = calcTotalQuantity(state.items);
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.article !== action.payload);
      state.totalQuantity = calcTotalQuantity(state.items);
      state.totalPrice = calcTotalPrice(state.items);
    },
    incrementCartQuantity(state, action: PayloadAction<string>) {
      const findItem = state.items.find(
        (obj) => obj.article === action.payload
      );
      if (findItem) {
        findItem.quantity++;
      }
      state.totalQuantity = calcTotalQuantity(state.items);
      state.totalPrice = calcTotalPrice(state.items);
    },
    decrementCartQuantity(state, action: PayloadAction<string>) {
      const findItem = state.items.find(
        (obj) => obj.article === action.payload
      );
      if (findItem) {
        findItem.quantity--;
      }
      state.totalQuantity = calcTotalQuantity(state.items);
      state.totalPrice = calcTotalPrice(state.items);
    },
    setCartQuantity(state, action: PayloadAction<tSetQuantity>) {
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
  addItemToCart,
  addItemsToCart,
  removeFromCart,
  incrementCartQuantity,
  decrementCartQuantity,
  setCartQuantity,
} = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartQuantity = (state: RootState) =>
  state.cart.totalQuantity;
export const selectCartPrice = (state: RootState) => state.cart.totalPrice;

export default cartSlice.reducer;
