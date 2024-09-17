import styles from "./Inspiration.module.scss";
import { CollectionGallery } from "@/widgets/widgets";
import { Container } from "@/shared/shared";

export const Inspiration = () => {
  return (
    <section className={styles.inspiration}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.header}>
            More ideas and inspiration from your great value furniture store
          </h2>
          <CollectionGallery />
        </div>
      </Container>
    </section>
  );
};
