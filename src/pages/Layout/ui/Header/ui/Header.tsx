import logo from "@/assets/img/00 header/logo.png";

import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { CartIndicator, FavoriteIndicator } from "@/features/features";
import { SearchField } from "@/widgets/widgets";
import { Container } from "@/shared/shared";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Link to={"/"} className={styles.logo}>
          <img src={logo} alt="logo" />
        </Link>
        <div className={styles.search}>
          <SearchField />
        </div>
        <div className={styles.info}>
          <Link className={styles.catalog} to={"/catalog"}>
            Catalog
          </Link>
          <FavoriteIndicator />
          <CartIndicator />
        </div>
      </Container>
    </header>
  );
};
