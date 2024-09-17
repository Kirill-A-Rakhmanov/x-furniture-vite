import { useAppDispatch } from "@/app/store/hooks";
import { addItemsToCart, tItemCard } from "@/entities/entities";
import { AddAllToCartButton } from "@/shared/shared";

type tProps = {
  items: tItemCard[];
};

export const AddAllToCart = ({ items }: tProps) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(addItemsToCart(items));
  };

  return <AddAllToCartButton onClick={() => handleClick()} />;
};
