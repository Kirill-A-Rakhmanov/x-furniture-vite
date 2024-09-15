import { RootState } from "@/app/store/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Status, tItemSearch, tSuggestedOption } from "../types";
import { getItems } from "../services";
import { mapSearchData, queryParams } from "@/entities/entities";

interface iSearchState {
  items: tItemSearch[];
  status: Status;
  suggestedOptions: tSuggestedOption[];
}

const initialState: iSearchState = {
  items: [],
  status: Status.LOADING,
  suggestedOptions: [
    { title: "Sofa", path: "/catalog?category=sofa", value: "sofa" },
    { title: "Bed", path: "/catalog?category=bed", value: "bed" },
    {
      title: "Living room",
      path: "/catalog?collection=living room",
      value: "living room",
    },
  ],
};

export const fetchSearchItems = createAsyncThunk(
  "products/fetchSearchStatus",
  async (params: queryParams) => {
    const response: tItemSearch[] = await getItems(params).then((data) =>
      data.map((obj) => mapSearchData(obj))
    );
    return response as tItemSearch[];
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearSearchItems(state) {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchItems.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(
        fetchSearchItems.fulfilled,
        (state, action: PayloadAction<tItemSearch[]>) => {
          state.status = Status.SUCCESS;
          state.items = action.payload;
        }
      )
      .addCase(fetchSearchItems.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export const { clearSearchItems } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search;

export default searchSlice.reducer;
