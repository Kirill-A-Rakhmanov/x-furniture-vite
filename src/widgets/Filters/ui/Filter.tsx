import React from "react";

import styles from "./Filter.module.scss";
import ArrowIcon from "@/assets/icons/arrow-right.svg";
import { FilterPopup } from "@/widgets/widgets";
import clsx from "clsx";

type tProps = {
  title: string;
  list: React.ReactNode;
};

export const Filter = ({ list, title }: tProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const sortRef = React.useRef(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const closePopup = () => {
    setIsOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (sortRef.current && !e.composedPath().includes(sortRef.current)) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div
        ref={sortRef}
        onClick={() => togglePopup()}
        className={clsx(styles.button, isOpen && styles.active)}
      >
        <span className={styles.title}>{title}</span>
        <ArrowIcon className={clsx(styles.icon, isOpen && styles.active)} />
      </div>
      {isOpen && (
        <FilterPopup
          closePopup={() => closePopup()}
          title={title}
          list={list}
        />
      )}
    </div>
  );
};
