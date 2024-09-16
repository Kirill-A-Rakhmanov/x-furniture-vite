// import React from "react";

import { Container } from "@/shared/shared";
import styles from "./NotFound.module.scss";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <section className={styles.notfound}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Page can't be found</h1>
          <div className={styles.subtitle}>
            Let's bounce you back to somewhere more inspiring.
          </div>
          <div className={styles.subtitle}>
            Search to find what you're looking for, or{" "}
            <Link className={styles.link} to={"/"}>
              hop on over to the homepage.
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
