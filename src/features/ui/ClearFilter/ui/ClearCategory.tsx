import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { selectFilter, setCategory } from "@/entities/entities";
import { CurrentFilterButton } from "@/shared/shared";

export const ClearCategory = () => {
  const dispatch = useAppDispatch();
  const { category } = useAppSelector(selectFilter);

  const handleClick = () => {
    dispatch(setCategory(""));
  };

  return (
    <CurrentFilterButton
      text={"Category: " + category}
      onClick={() => handleClick()}
    />
  );
};
