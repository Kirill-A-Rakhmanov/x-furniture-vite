// import styles from "./Catalog.module.scss";
import { Filters } from "./blocks/Filters/Filters";
import { ItemsList } from "./blocks/ItemsList/ItemsList";
import { CurrentFilters } from "./blocks/CurrentFilters/CurrentFilters";

export const Catalog = () => {
  return (
    <>
      <Filters />
      <CurrentFilters />
      <ItemsList />
    </>
  );
};
