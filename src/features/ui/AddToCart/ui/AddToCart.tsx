import { useAppDispatch } from "@/app/store/hooks";
import { addItemToCart, tItemCard } from "@/entities/entities";
import { AddToCartButton } from "@/shared/shared";

type tProps = {
  item: tItemCard;
};

export const AddToCart = ({ item }: tProps) => {
  const dispatch = useAppDispatch();

  const handleClick = (item: tItemCard) => {
    dispatch(addItemToCart(item));
  };

  return <AddToCartButton onClick={() => handleClick(item)} />;
};
