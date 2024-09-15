import React from "react";

import styles from "./Search.module.scss";
import { setSearch } from "@/entities/entities";
import { useAppDispatch } from "@/app/store/hooks";

type tProps = {
  search: string;
};

export const Search = ({ search }: tProps) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState<string>("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  React.useEffect(() => {
    dispatch(setSearch(value));
  }, [value]);

  React.useEffect(() => {
    if (!search) {
      setValue("");
    }
  }, [search]);

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={handleChange}
      placeholder="What are you looking for?"
      type="text"
      className={styles.input}
    />
  );
};
