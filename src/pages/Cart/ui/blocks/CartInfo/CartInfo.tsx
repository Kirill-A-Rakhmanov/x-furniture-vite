import styles from "./CartInfo.module.scss";
import { useAppSelector } from "@/app/store/hooks";
import { selectCartQuantity } from "@/entities/entities";
import { NoItems } from "./NoItems/NoItems";
import { CartItems } from "./CartItems/CartItems";
import { Container } from "@/shared/shared";

export const CartInfo = () => {
  const quantity = useAppSelector(selectCartQuantity);

  return (
    <section className={styles.cartInfo}>
      <Container className={styles.container}>
        <div className={styles.content}>
          {quantity ? <CartItems /> : <NoItems />}
        </div>
      </Container>
    </section>
  );
};
