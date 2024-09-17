import styles from "./NoItems.module.scss";
import { LinkButton } from "@/shared/shared";

export const NoItems = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h3 className={styles.header}>There are no items in your list</h3>
        <span className={styles.text}>
          You can find all available products in our catalog
        </span>
        <LinkButton link={"/catalog"} text={"GATALOG"} />
      </div>
    </div>
  );
};
