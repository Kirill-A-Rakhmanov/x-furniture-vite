import styles from "./SetQuantity.module.scss";
import {
  ChangeFavoriteQuantity,
  DecreaseFavoriteQuantity,
  IncreaseFavoriteQuantity,
} from "@/features/features";
import { tSetQuantity } from "@/entities/entities";

export const SetFavoriteQuantity = ({ article, quantity }: tSetQuantity) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.button}>
        <DecreaseFavoriteQuantity quantity={quantity} article={article} />
      </div>
      <div className={styles.input}>
        <ChangeFavoriteQuantity article={article} quantity={quantity} />
      </div>
      <div className={styles.button}>
        <IncreaseFavoriteQuantity quantity={quantity} article={article} />
      </div>
    </div>
  );
};
