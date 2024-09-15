import React, { ReactNode } from "react";

import styles from "./ScrollableArea.module.scss";
import { ScrollLeft, ScrollRight } from "@/features/features";

type tProps = {
  content: ReactNode;
};

export const ScrollableArea = ({ content }: tProps) => {
  const itemsContainerRef = React.useRef(null);
  const scrollPosition = React.useRef<number>(0);
  const scrollStep = React.useRef<number>(0);
  const [scrollOnRight, setScrollOnRight] = React.useState(true);
  const [scrollOnLeft, setScrollOnLeft] = React.useState(true);

  function handleScroll() {
    scrollPosition.current = itemsContainerRef.current.scrollLeft;
    if (itemsContainerRef.current.scrollLeft > 0) {
      setScrollOnLeft(false);
    } else {
      setScrollOnLeft(true);
    }
    if (
      itemsContainerRef.current.scrollLeft <
      itemsContainerRef.current.scrollWidth -
        itemsContainerRef.current.offsetWidth
    ) {
      setScrollOnRight(false);
    } else {
      setScrollOnRight(true);
    }
  }

  function handleButtonScroll(scrollAmount: number) {
    itemsContainerRef.current.scrollLeft =
      scrollPosition.current + scrollAmount;
  }

  // Вычисление шага скролла в зависимости от ширины контейнера
  React.useEffect(() => {
    function MinusTenPercent(value: number) {
      return Math.trunc(value * 0.9);
    }
    function calcScrollStep() {
      scrollStep.current = MinusTenPercent(
        itemsContainerRef.current.offsetWidth
      );
    }

    calcScrollStep();
    handleScroll();

    window.addEventListener("resize", calcScrollStep);
    return () => {
      window.removeEventListener("resize", calcScrollStep);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div
        ref={itemsContainerRef}
        onScroll={handleScroll}
        className={styles.items}
      >
        {content}
      </div>
      <div className={styles.scrollLeft}>
        {!scrollOnLeft && (
          <ScrollLeft onClick={() => handleButtonScroll(-scrollStep.current)} />
        )}
      </div>
      <div className={styles.scrollRight}>
        {!scrollOnRight && (
          <ScrollRight onClick={() => handleButtonScroll(scrollStep.current)} />
        )}
      </div>
    </div>
  );
};
