import styles from "./Banner.module.scss";
import { LinkButton } from "@/shared/shared";

export const Banner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h3 className={styles.header}>Build lovely interior with X.FUR</h3>
        <span className={styles.text}>Get some more ideas in our catalog</span>
        <LinkButton link="/catalog" text={"CATALOG"} />
      </div>
    </div>
  );
};
