import styles from "./Subtotal.module.scss";
import { AddAllToCart } from "@/features/features";
import { useAppSelector } from "@/app/store/hooks";
import { selectFavoriteItems, selectFavoritePrice } from "@/entities/entities";
import { Container } from "@/shared/shared";

export const Subtotal = () => {
  const items = useAppSelector(selectFavoriteItems);
  const totalPrice = useAppSelector(selectFavoritePrice);
  return (
    <section className={styles.subtotal}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <div className={styles.info}>
            <span className={styles.text}>Total price</span>
            <div className={styles.price}>{totalPrice} €</div>
          </div>
          <div className={styles.button}>
            <AddAllToCart items={items} />
          </div>
        </div>
      </Container>
    </section>
  );
};
