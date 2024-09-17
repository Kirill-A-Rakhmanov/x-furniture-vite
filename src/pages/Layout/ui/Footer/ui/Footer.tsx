import styles from "./Footer.module.scss";
import { Container } from "@/shared/shared";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.news}>
          <div className={styles.newsHeader}>Newsletter</div>
          <form className={styles.newsForm}>
            <div className={styles.newsField}>
              <input
                placeholder="your@email.com"
                className={styles.newsInput}
                type="email"
              />
            </div>
            <button className={styles.newsButton}>Subscribe</button>
          </form>
        </div>
        <div className={styles.bottom}>
          <nav className={styles.navigation}>
            <ul className={styles.navItems}>
              <li className={styles.navItem}>
                <a href="/" className={styles.navLink}>
                  About
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="/" className={styles.navLink}>
                  FAQ
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="/" className={styles.navLink}>
                  News
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="/" className={styles.navLink}>
                  Careers
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="/" className={styles.navLink}>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <div className={styles.label}>Built with love</div>
        </div>
      </Container>
    </footer>
  );
};
