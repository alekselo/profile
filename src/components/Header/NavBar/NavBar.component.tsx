import { NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

export const NavBar = () => {
  const { t } = useTranslation();
  const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? cn(styles.active, styles.link) : styles.link;
  };

  return (
    <div className={styles.container}>
      <NavLink className={getActiveClass} to="/">
        {t("navlink.about")}
      </NavLink>
      <NavLink className={getActiveClass} to="/technologies">
        {t("navlink.technologies")}
      </NavLink>
      <NavLink className={getActiveClass} to="/career">
        {t("navlink.career")}
      </NavLink>
    </div>
  );
};
