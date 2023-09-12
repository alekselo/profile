import { Links } from "./Links/Links.component";
import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.contacts}>
          <div className={styles.contactsItem}>
            <p>Call me:</p>
            <a href="tel:+79875501592">+7-987-550-15-92</a>
          </div>
          <div className={styles.contactsItem}>
            <p>Email:</p>
            <a href="mailto:a.a.loktev@yandex.ru">a.a.loktev@yandex.ru</a>
          </div>
        </div>
        <Links />
      </div>
    </footer>
  );
};
