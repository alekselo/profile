import { Links } from "./Links/Links.component";
import { Logo } from "./Logo/Logo.component";
import { NavBar } from "./NavBar/NavBar.component";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        <div className={styles.navigationWrapper}>
          <NavBar />
        </div>
        <div className={styles.linksWrapper}>
          <Links />
        </div>
      </div>
    </header>
  );
};
