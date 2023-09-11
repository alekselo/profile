import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header.component";
import styles from "./styles.module.scss";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <div className={styles.hideContent}>
        Sorry! Responsive design in progress. <br /> :({" "}
      </div>
    </div>
  );
};
