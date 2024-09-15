export type tOrder = "asc" | "desc" | "";

export type queryParams = {
  sortby?: string;
  order?: tOrder;
  page?: string;
  limit?: string;
  collection?: string;
  category?: string;
  search?: string;
};

export type tSortOption = {
  title: string;
  sortType: string;
  order: tOrder;
};

export type tCategoryOption = {
  title: string;
  category: string;
};

export type tCollectionOption = {
  title: string;
  collection: string;
};
