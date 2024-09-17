import styles from "./ItemsList.module.scss";
import { ProductRow } from "@/widgets/widgets";
import { useAppSelector } from "@/app/store/hooks";
import { selectProducts } from "@/entities/entities";
import { Container } from "@/shared/shared";

export const ItemsList = () => {
  const { items, status } = useAppSelector(selectProducts);

  return (
    <section className={styles.itemsList}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <ProductRow items={items} status={status} />
        </div>
      </Container>
    </section>
  );
};
