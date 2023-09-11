import { Photo } from "./Photo/Photo.component";
import { TextContent } from "./TextContent/TextContent.component";
import styles from "./styles.module.scss";

export const AboutMe = () => {
  return (
    <div className={styles.container}>
      <section className={styles.aboutWrapper}>
        <Photo />
        <TextContent />
      </section>
    </div>
  );
};
