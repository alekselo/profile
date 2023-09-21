import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

export const ChangeLanguageButton = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === "en" ? "ru" : "en";
    i18n.changeLanguage(newLanguage);
  };

  const buttonText = i18n.language === "en" ? "RU" : "EN";

  return (
    <button className={styles.button} onClick={toggleLanguage}>
      {buttonText}
    </button>
  );
};
