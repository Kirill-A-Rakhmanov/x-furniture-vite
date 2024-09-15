// import React from "react";

import styles from "./CurrentFilters.module.scss";
import { ClearAll, ClearCategory, ClearCollection } from "@/features/features";
import { useAppSelector } from "@/app/store/hooks";
import { selectFilter } from "@/entities/entities";
import { Container } from "@/shared/shared";

export const CurrentFilters = () => {
  const { category, collection } = useAppSelector(selectFilter);
  return (
    <section className={styles.filters}>
      <Container className={styles.container}>
        {(category || collection) && (
          <div className={styles.content}>
            {category && <ClearCategory />}
            {collection && <ClearCollection />}
            <ClearAll />
          </div>
        )}
      </Container>
    </section>
  );
};
