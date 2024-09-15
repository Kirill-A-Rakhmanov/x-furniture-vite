import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/app/store/store";
import { tCollection, tCollectionCategory } from "../types";

interface iCollectionState {
  items: tCollection[];
  categories: tCollectionCategory[];
}

const initialState: iCollectionState = {
  items: [
    {
      collection: "bedroom",
      image:
        "https://www.ikea.com/ext/ingkadam/m/39db979d993790c9/original/PH159259.jpg?f=l",
      items: ["29228205", "20231306"],
    },
    {
      collection: "living room",
      image:
        "https://www.ikea.com/ext/ingkadam/m/6b387ce32b9339d/original/PH194132.jpg?f=l",
      items: ["49489640", "30555282"],
    },
    {
      collection: "kitchen",
      image:
        "https://www.ikea.com/ext/ingkadam/m/2e70991d53cdffe6/original/PH195959.JPG?f=l",
      items: ["30212675", "70419264", "70544866"],
    },
    {
      collection: "bedroom",
      image:
        "https://www.ikea.com/ext/ingkadam/m/1f9bdd6ca0f0563b/original/PH196325.JPG?f=l",
      items: ["50530648", "10501271"],
    },
    {
      collection: "living room",
      image:
        "https://www.ikea.com/ext/ingkadam/m/e58b3a5841a4ea8/original/PH178639-crop002.jpg?f=l",
      items: ["19393154", "30451864", "30492572"],
    },
    {
      collection: "kitchen",
      image:
        "https://www.ikea.com/ext/ingkadam/m/a5875b1d6b86bf1/original/PH186348.jpg?f=l",
      items: ["30507465", "10422504"],
    },
    {
      collection: "bedroom",
      image:
        "https://www.ikea.com/ext/ingkadam/m/12bddc3c00083d34/original/PH176393.jpg?f=l",
      items: ["30426836", "49385751"],
    },
    {
      collection: "living room",
      image:
        "https://www.ikea.com/ext/ingkadam/m/283e1f940808f690/original/PH191695.jpg?f=l",
      items: ["20426808", "50515313"],
    },
    {
      collection: "kitchen",
      image:
        "https://www.ikea.com/ext/ingkadam/m/63ae61f08bb80d57/original/PH177919-crop001.jpg?f=l",
      items: ["00277395", "50386245", "80390359"],
    },
    {
      collection: "bedroom",
      image:
        "https://www.ikea.com/ext/ingkadam/m/5a36edc040c812cf/original/PH194128.jpg?f=l",
      items: ["49489640", "30555282"],
    },
    {
      collection: "living room",
      image:
        "https://www.ikea.com/ext/ingkadam/m/3f20c828679b1e1c/original/PH167471-crop001.jpg?f=l",
      items: ["59031698", "70297658"],
    },
    {
      collection: "kitchen",
      image:
        "https://www.ikea.com/ext/ingkadam/m/23ccd7a274dbee32/original/PH190468.jpg?f=l",
      items: ["30477878"],
    },
  ],
  categories: [
    { title: "All", value: "", id: 0 },
    { title: "Bedroom", value: "bedroom", id: 1 },
    { title: "Living room", value: "living room", id: 2 },
    { title: "Kitchen", value: "kitchen", id: 3 },
  ],
};

export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {},
});

export const {} = collectionSlice.actions;

export const selectCollection = (state: RootState) => state.collection;

export default collectionSlice.reducer;
