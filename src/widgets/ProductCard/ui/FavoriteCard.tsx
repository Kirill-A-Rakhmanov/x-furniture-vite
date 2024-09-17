import { ProductFavorite, tItemCard } from "@/entities/entities";
import { AddToCart, RemoveFromFavorite } from "@/features/features";
import { SetFavoriteQuantity } from "@/widgets/widgets";

type tProps = {
  itemData: tItemCard;
};

export const FavoriteCard = ({ itemData }: tProps) => {
  return (
    <ProductFavorite
      title={itemData.title}
      subtitle={itemData.subtitle}
      color={itemData.color}
      size={itemData.size}
      price={itemData.price}
      image={itemData.image}
      quantity={itemData.quantity!}
      actionAddToCart={<AddToCart item={itemData} />}
      actionRemoveFromFavorite={
        <RemoveFromFavorite article={itemData.article} />
      }
      actionSetQuantity={
        <SetFavoriteQuantity
          article={itemData.article}
          quantity={itemData.quantity!}
        />
      }
    />
  );
};
