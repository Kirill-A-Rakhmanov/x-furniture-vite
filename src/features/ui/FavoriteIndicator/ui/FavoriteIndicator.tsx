import FavoriteIcon from "@/assets/icons/favorite.svg";
import styles from "./FavoriteIndicator.module.scss";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/app/store/hooks";
import { selectFavoriteQuantity } from "@/entities/entities";

export const FavoriteIndicator = () => {
  const quantity = useAppSelector(selectFavoriteQuantity);

  return (
    <Link to={"/favorite"} className={styles.wrapper}>
      <FavoriteIcon className={styles.icon} />
      {quantity > 0 && <span className={styles.quantity}>{quantity}</span>}
    </Link>
  );
};
