import { NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

export const NavBar = () => {
  const { t, i18n } = useTranslation();
  const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? cn(styles.active, styles.link) : styles.link;
  };

  const changeLng = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.container}>
      <NavLink className={getActiveClass} to="/">
        {t("aboutMe")}
      </NavLink>
      <NavLink className={getActiveClass} to="/technologies">
        {t("technologies")}
      </NavLink>
      <NavLink className={getActiveClass} to="/career">
        {t("careers")}
      </NavLink>
      <button onClick={() => changeLng("ru")}>ru</button>
      <button onClick={() => changeLng("en")}>en</button>
    </div>
  );
};
