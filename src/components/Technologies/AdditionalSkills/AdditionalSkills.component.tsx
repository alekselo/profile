import { skills } from "./skills";
import styles from "./styles.module.scss";

export const AdditionalSkills = () => {
  return (
    <div className={styles.skillsWrapper}>
      <ul className={styles.skillsItems}>
        {skills.map((skill, index) => (
          <li className={styles.item} key={index}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};
