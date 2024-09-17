import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { selectFilter, setCollection } from "@/entities/entities";
import { CurrentFilterButton } from "@/shared/shared";

export const ClearCollection = () => {
  const dispatch = useAppDispatch();
  const { collection } = useAppSelector(selectFilter);

  const handleClick = () => {
    dispatch(setCollection(""));
  };

  return (
    <CurrentFilterButton
      text={"Collection: " + collection}
      onClick={() => handleClick()}
    />
  );
};
