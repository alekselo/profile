import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header.component";
import styles from "./styles.module.scss";
import { Footer } from "../components/Footer/Footer.component";

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
      <div className={styles.hideContent}>
        Sorry! Responsive design in progress. <br /> :(
      </div>
    </div>
  );
};
