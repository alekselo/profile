import { useTranslation } from "react-i18next";
// import { GetFullYear } from "../../../helpers/GetFullYear.component";
import styles from "./styles.module.scss";
import { getFullYear } from "../../../helpers/getFullYear";

export const TextContent = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p className={styles.aboutText}>
        {t("about.main.first", { age: getFullYear("19.07.1993") })}
      </p>{" "}
      <p className={styles.aboutText}>{t("about.main.second")}</p>
    </div>
  );
};
