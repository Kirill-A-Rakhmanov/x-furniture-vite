import { useAppSelector } from "@/app/store/hooks";
import { selectFavoriteItems } from "@/entities/entities";
import { FavoriteCard } from "@/widgets/widgets";

// import styles from "./ItemsRow.module.scss";

export const FavoriteRow = () => {
  const items = useAppSelector(selectFavoriteItems);
  return (
    <>
      {items ? (
        items.map((obj) => <FavoriteCard key={obj.article} itemData={obj} />)
      ) : (
        <div>no items</div>
      )}
    </>
  );
};

{
  /* <ProductItemSkeleton cards={7} /> */
}
