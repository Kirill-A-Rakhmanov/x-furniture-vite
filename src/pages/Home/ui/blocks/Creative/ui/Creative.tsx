import React from "react";

import styles from "./Creative.module.scss";
import { Container, LinkButton } from "@/shared/shared";
import { getItemByArticle } from "@/entities/entities";

export const Creative = () => {
  const article = "29228205";
  const [image, setImage] = React.useState<string>("");

  React.useEffect(() => {
    getItemByArticle(article).then((res) => setImage(res.colors[0].images[2]));
  }, []);

  return (
    <section className={styles.creative}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.infoWrapper}>
              <div className={styles.title}>Creative harmonious living</div>
              <div className={styles.description}>
                X.FUR products are made with care to fit perfectly in your
                interior
              </div>
              <LinkButton link={`/product/${article}`} text={"SHOP NOW"} />
            </div>
          </div>
          <div className={styles.image}>
            <img src={image} alt="sofa" />
          </div>
        </div>
      </Container>
    </section>
  );
};
