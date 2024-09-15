import { tCategoryOption, tCollectionOption, tSortOption } from "./../types";
import { RootState } from "@/app/store/store";
import { createSlice } from "@reduxjs/toolkit";

interface iOptionState {
  sortOptions: tSortOption[];
  categoryOptions: tCategoryOption[];
  collectionOptions: tCollectionOption[];
}

const initialState: iOptionState = {
  sortOptions: [
    { title: "Price: low to high", sortType: "basePrice", order: "asc" },
    { title: "Price: high to low", sortType: "basePrice", order: "desc" },
    { title: "Rating", sortType: "rating", order: "asc" },
  ],
  categoryOptions: [
    { title: "All", category: "" },
    { title: "Sofa", category: "sofa" },
    { title: "Lamp", category: "lamp" },
    { title: "Bed", category: "bed" },
    { title: "Rug", category: "rug" },
    { title: "Table", category: "table" },
    { title: "Chair", category: "chair" },
  ],
  collectionOptions: [
    { title: "All", collection: "" },
    { title: "Bedroom", collection: "bedroom" },
    { title: "Living room", collection: "living room" },
    { title: "Kitchen", collection: "kitchen" },
    { title: "Electronics", collection: "electronics" },
  ],
};

export const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {},
});

export const {} = optionsSlice.actions;

export const selectOptions = (state: RootState) => state.options;
export const selectSortOptions = (state: RootState) =>
  state.options.sortOptions;
export const selectCategoryOptions = (state: RootState) =>
  state.options.categoryOptions;
export const selectCollectionOptions = (state: RootState) =>
  state.options.collectionOptions;

export default optionsSlice.reducer;
