import { useAppDispatch } from "@/app/store/hooks";
import { addItemToCart, tItemCard } from "@/entities/entities";
import { AddOneToCartButton } from "@/shared/shared";

type tProps = {
  item: tItemCard;
};

export const AddOneToCart = ({ item }: tProps) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(addItemToCart(item));
  };
  return <AddOneToCartButton onClick={() => handleClick()} />;
};
