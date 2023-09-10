import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import { Icons } from "../../Icons/Icons";

export const Logo = () => {
  return (
    <NavLink className={styles.link} to="/">
      <Icons name="logo" />
      Alexey Loktev
    </NavLink>
  );
};
