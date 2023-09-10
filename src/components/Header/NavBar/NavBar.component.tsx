import { NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./styles.module.scss";

export const NavBar = () => {
  const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? cn(styles.active, styles.link) : styles.link;
  };

  return (
    <div className={styles.container}>
      <NavLink className={getActiveClass} to="/">
        About Me
      </NavLink>
      <NavLink className={getActiveClass} to="/technologies">
        Technologies
      </NavLink>
      <NavLink className={getActiveClass} to="/career">
        Career Path
      </NavLink>
    </div>
  );
};
