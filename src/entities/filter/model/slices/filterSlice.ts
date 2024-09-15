import { RootState } from "@/app/store/store";
import { queryParams, tOrder } from "@/entities/entities";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: queryParams = {
  sortby: "",
  order: "",
  page: "",
  limit: "",
  collection: "",
  category: "",
  search: "",
};

export const filterSlice = createSlice({
  name: "filter",

  initialState,
  reducers: {
    setSort(state, action: PayloadAction<string>) {
      state.sortby = action.payload;
    },
    setOrder(state, action: PayloadAction<tOrder>) {
      state.order = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setCollection(state, action: PayloadAction<string>) {
      state.collection = action.payload;
    },
    setPage(state, action: PayloadAction<string>) {
      state.page = action.payload;
    },
    setLimit(state, action: PayloadAction<string>) {
      state.limit = action.payload;
    },
    setFilter(state, action: PayloadAction<queryParams>) {
      state.sortby = action.payload.sortby
        ? action.payload.sortby
        : state.sortby;
      state.order = action.payload.order ? action.payload.order : state.order;
      state.page = action.payload.page ? action.payload.page : state.page;
      state.limit = action.payload.limit ? action.payload.limit : state.limit;
      state.collection = action.payload.collection
        ? action.payload.collection
        : state.collection;
      state.category = action.payload.category
        ? action.payload.category
        : state.category;
      state.search = action.payload.search
        ? action.payload.search
        : state.search;
    },
    clearFilter(state) {
      state.sortby = "";
      state.order = "";
      state.category = "";
      state.collection = "";
      state.page = "";
      state.limit = "";
      state.search = "";
    },
  },
});

export const {
  setCategory,
  setCollection,
  setFilter,
  setLimit,
  setOrder,
  setPage,
  setSearch,
  setSort,
  clearFilter,
} = filterSlice.actions;

export const selectFilter = (state: RootState) => state.filter;

export default filterSlice.reducer;
