import React from "react";

import styles from "./SearchResult.module.scss";
import SearchIcon from "@/assets/icons/search.svg";
import { Link } from "react-router-dom";
import { tSuggestedOption } from "@/entities/entities";

type tProps = {
  item: tSuggestedOption;
  onClick: React.MouseEventHandler;
};

export const Suggested = ({ item, onClick }: tProps) => {
  return (
    <Link onClick={onClick} to={item.path} className={styles.wrapper}>
      <SearchIcon className={styles.icon} />
      <span className={styles.title}>{item.title}</span>
    </Link>
  );
};
