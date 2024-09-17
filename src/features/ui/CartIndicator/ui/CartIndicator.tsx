import { Link } from "react-router-dom";

import CartIcon from "@/assets/icons/cart.svg";
import styles from "./CartIndicator.module.scss";
import { useAppSelector } from "@/app/store/hooks";
import { selectCartQuantity } from "@/entities/entities";

export const CartIndicator = () => {
  const quantity = useAppSelector(selectCartQuantity);

  return (
    <Link to={"/cart"} className={styles.wrapper}>
      <CartIcon className={styles.icon} />
      {quantity > 0 && <span className={styles.quantity}>{quantity}</span>}
    </Link>
  );
};
