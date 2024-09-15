import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Status, tItem } from "../types";
import { getItemByArticle } from "../services";
import { RootState } from "@/app/store/store";

interface iProductItemState {
  item: tItem;
  status: Status;
}

export const fetchItemData = createAsyncThunk(
  "productItem/fetchItemStatus",
  async (article: string) => {
    const response: tItem = await getItemByArticle(article);
    return response as tItem;
  }
);

const emptyItem: tItem = {
  id: "",
  title: "",
  subtitle: "",
  size: "",
  description: "",
  category: "",
  rating: 0,
  basePrice: 0,
  articles: [],
  collection: [],
  colors: [],
  measurements: {},
};

const initialState: iProductItemState = {
  item: emptyItem,
  status: Status.LOADING,
};

export const productItemSlice = createSlice({
  name: "productItem",
  initialState,
  reducers: {
    clearItemData(state) {
      state.item = emptyItem;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemData.pending, (state) => {
        state.status = Status.LOADING;
        state.item = emptyItem;
      })
      .addCase(
        fetchItemData.fulfilled,
        (state, action: PayloadAction<tItem>) => {
          state.status = Status.SUCCESS;
          state.item = action.payload;
        }
      )
      .addCase(fetchItemData.rejected, (state) => {
        state.status = Status.ERROR;
        state.item = emptyItem;
      });
  },
});

export const { clearItemData } = productItemSlice.actions;

export const selectProductItem = (state: RootState) => state.productItem;

export default productItemSlice.reducer;
