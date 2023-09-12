import { Link } from "react-router-dom";
import { Icons } from "../../Icons/Icons";
import styles from "./styles.module.scss";

export const Links = () => {
  return (
    <div className={styles.linkWrapper}>
      <Link to="https://github.com/alekselo" target="_blank">
        <Icons name="github" size={72} />
      </Link>
      <Link to="https://t.me/alexey_loktev" target="_blank">
        <Icons name="telegram" size={72} />
      </Link>
    </div>
  );
};
