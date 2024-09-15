import React from "react";

import styles from "./SearchResult.module.scss";
import {
  ProductSearch,
  ProductSearchSkeleton,
  selectSearch,
  Status,
  tItemSearch,
} from "@/entities/entities";
import { useAppSelector } from "@/app/store/hooks";
import { Suggested } from "./Suggested";

type tProps = {
  items: tItemSearch[];
  status: Status;
  search: string;
  onChoose: React.MouseEventHandler;
};

export const SearchResult = ({ items, status, search, onChoose }: tProps) => {
  const { suggestedOptions } = useAppSelector(selectSearch);

  return (
    <div className={styles.results}>
      {!search ? (
        <>
          {suggestedOptions.map((obj, index) => (
            <Suggested onClick={onChoose} key={index} item={obj} />
          ))}
        </>
      ) : (
        <>
          {status === Status.SUCCESS ? (
            <>
              {items.length ? (
                items.map((obj) => (
                  <ProductSearch item={obj} onClick={onChoose} />
                ))
              ) : (
                <div>No Matching Results</div>
              )}
            </>
          ) : (
            <div>
              {Array(4)
                .fill(0)
                .map(() => (
                  <ProductSearchSkeleton />
                ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};
