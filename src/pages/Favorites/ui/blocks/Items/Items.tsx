// import React from "react";

import styles from "./Items.module.scss";
import { FavoriteRow } from "@/widgets/widgets";
import { Banner } from "./Banner/Banner";
import { useAppSelector } from "@/app/store/hooks";
import { selectFavoriteQuantity } from "@/entities/entities";
import { NoItems } from "./NoItems/NoItems";
import { Container } from "@/shared/shared";

export const Items = () => {
  const favoriteItemsQuantity = useAppSelector(selectFavoriteQuantity);

  return (
    <section className={styles.items}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.header}>Favorite items</h2>
          <div className={styles.wrapper}>
            {favoriteItemsQuantity > 0 ? (
              <div className={styles.grid}>
                <Banner />
                <FavoriteRow />
              </div>
            ) : (
              <NoItems />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
