import styles from "./CartItems.module.scss";
import { CartRow } from "./CartRow/CartRow";
import { OrderSummary } from "./OrderSummary/OrderSummary";

export const CartItems = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Cart</h2>
      <div className={styles.content}>
        <CartRow />
        <OrderSummary />
      </div>
    </div>
  );
};
