import styles from "./SetQuantity.module.scss";
import {
  ChangeCartQuantity,
  DecreaseCartQuantity,
  IncreaseCartQuantity,
} from "@/features/features";
import { tSetQuantity } from "@/entities/entities";

export const SetCartQuantity = ({ article, quantity }: tSetQuantity) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.button}>
        <DecreaseCartQuantity quantity={quantity} article={article} />
      </div>
      <div className={styles.input}>
        <ChangeCartQuantity article={article} quantity={quantity} />
      </div>
      <div className={styles.button}>
        <IncreaseCartQuantity quantity={quantity} article={article} />
      </div>
    </div>
  );
};
