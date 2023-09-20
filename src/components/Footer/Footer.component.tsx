import { Links } from "./Links/Links.component";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.contacts}>
          <div className={styles.contactsItem}>
            <p>{t("footer.callMe")}:</p>
            <a href="tel:+79875501592">+7-987-550-15-92</a>
          </div>
          <div className={styles.contactsItem}>
            <p>{t("footer.email")}:</p>
            <a href="mailto:a.a.loktev@yandex.ru">a.a.loktev@yandex.ru</a>
          </div>
        </div>
        <Links />
      </div>
    </footer>
  );
};
