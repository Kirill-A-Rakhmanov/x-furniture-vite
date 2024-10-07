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
        "https://drive.google.com/thumbnail?id=1pg_7Gpsm_eSmGVNv4HRHxxZ4F1UjRUM-&sz=w1000",

      items: ["29228205", "20231306"],
    },
    {
      collection: "living room",
      image:
        "https://drive.google.com/thumbnail?id=1trUWOBKP5aFq1WIQsUoQr1ljpZy9M1Ys&sz=w1000",
      items: ["49489640", "30555282"],
    },
    {
      collection: "kitchen",
      image:
        "https://drive.google.com/thumbnail?id=1CUxRuylQmnFdWxQQLNhun_yYM5hr68bO&sz=w1000",
      items: ["30212675", "70419264", "70544866"],
    },
    {
      collection: "bedroom",
      image:
        "https://drive.google.com/thumbnail?id=1WV_PbD7RHvgX_8LlgMsGCpUmTGHf_vQ-&sz=w1000",
      items: ["50530648", "10501271"],
    },
    {
      collection: "living room",
      image:
        "https://drive.google.com/thumbnail?id=1qXNEujbID6TgzQrgm_aydgCOAdHbNwTU&sz=w1000",

      items: ["19393154", "30451864", "30492572"],
    },
    {
      collection: "kitchen",
      image:
        "https://drive.google.com/thumbnail?id=1AhNkOMuQ5k_79sFsdkg-Ql7d2HyWyzGx&sz=w1000",
      items: ["30507465", "10422504"],
    },
    {
      collection: "bedroom",
      image:
        "https://drive.google.com/thumbnail?id=1CsXjsogTxHXIaLABCytFVoZPsAy1y7Hh&sz=w1000",
      items: ["30426836", "49385751"],
    },
    {
      collection: "living room",
      image:
        "https://drive.google.com/thumbnail?id=19KQ9mG-9ujzLFJz96OM9e41434dcVKpF&sz=w1000",
      items: ["20426808", "50515313"],
    },
    {
      collection: "kitchen",
      image:
        "https://drive.google.com/thumbnail?id=17Y5teYAJ6PF4ToFPOTqxX-Ag70NsCFTL&sz=w1000",

      items: ["00277395", "50386245", "80390359"],
    },
    {
      collection: "bedroom",
      image:
        "https://drive.google.com/thumbnail?id=14H00ltpJByxijlo8iHdqVUlsHtd2hyGK&sz=w1000",
      items: ["49489640", "30555282"],
    },
    {
      collection: "living room",
      image:
        "https://drive.google.com/thumbnail?id=1XfDbT2KkIVhHJ9FfZanlCNPlZe2mF0pJ&sz=w1000",
      items: ["59031698", "70297658"],
    },
    {
      collection: "kitchen",
      image:
        "https://drive.google.com/thumbnail?id=1HyjJHBou-PwT4R9Qtm12BQpATvBHD36l&sz=w1000",
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
