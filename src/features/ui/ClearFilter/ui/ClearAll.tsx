import { useAppDispatch } from "@/app/store/hooks";
import { setCategory, setCollection } from "@/entities/entities";
import { SecondaryButton } from "@/shared/shared";

export const ClearAll = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setCategory(""));
    dispatch(setCollection(""));
  };

  return <SecondaryButton text={"Clear all"} onClick={() => handleClick()} />;
};
