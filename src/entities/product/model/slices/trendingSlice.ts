import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Status, tItemCard } from "../types";
import { getItems } from "../services";
import { mapProductCardData, queryParams } from "@/entities/entities";
import { RootState } from "@/app/store/store";

interface iTrendingState {
  items: tItemCard[];
  status: Status;
}

export const fetchTrendingProducts = createAsyncThunk(
  "trending/fetchTrendingStatus",
  async (params: queryParams) => {
    const response: tItemCard[] = await getItems(params).then((data) =>
      data.map((obj) => mapProductCardData(obj))
    );
    return response as tItemCard[];
  }
);

const initialState: iTrendingState = {
  items: [],
  status: Status.LOADING,
};

export const trendingSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingProducts.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(
        fetchTrendingProducts.fulfilled,
        (state, action: PayloadAction<tItemCard[]>) => {
          state.status = Status.SUCCESS;
          state.items = action.payload;
        }
      )
      .addCase(fetchTrendingProducts.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export const {} = trendingSlice.actions;

export const selectTrending = (state: RootState) => state.trending;
export const selectTrendingItems = (state: RootState) => state.trending.items;
export const selectTrendingStatus = (state: RootState) => state.trending.status;

export default trendingSlice.reducer;
