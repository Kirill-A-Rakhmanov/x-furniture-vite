import { useAppDispatch } from "@/app/store/hooks";
import { removeFromCart } from "@/entities/entities";
import { TrashButton } from "@/shared/shared";

type tProps = {
  article: string;
};

export const RemoveFromCart = ({ article }: tProps) => {
  const dispatch = useAppDispatch();

  const handleClick = (article: string) => {
    dispatch(removeFromCart(article));
  };
  return <TrashButton onClick={() => handleClick(article)} />;
};
