import { Link } from "react-router-dom";

import styles from "./LinkButton.module.scss";

type tProps = {
  link: string;
  text: string;
};

export const LinkButton = ({ link, text }: tProps) => {
  return (
    <Link to={link}>
      <button className={styles.button}>{text}</button>
    </Link>
  );
};
