import { RootState } from "@/app/store/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Status, tItemCard } from "../types";
import { getItems } from "../services";
import { mapProductCardData, queryParams } from "@/entities/entities";

interface iProductsState {
  items: tItemCard[];
  status: Status;
}

const initialState: iProductsState = {
  items: [],
  status: Status.LOADING,
};

export const fetchItems = createAsyncThunk(
  "products/fetchItemsStatus",
  async (params: queryParams) => {
    const response: tItemCard[] = await getItems(params).then((data) =>
      data.map((obj) => mapProductCardData(obj))
    );
    return response as tItemCard[];
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(
        fetchItems.fulfilled,
        (state, action: PayloadAction<tItemCard[]>) => {
          state.status = Status.SUCCESS;
          state.items = action.payload;
        }
      )
      .addCase(fetchItems.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export const {} = productsSlice.actions;

export const selectProducts = (state: RootState) => state.products;

export default productsSlice.reducer;
