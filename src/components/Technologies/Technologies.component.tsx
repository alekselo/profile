import { SkillIndicator } from "../SkillIndicator/SkillIndicator.component";
import styles from "./styles.module.scss";

export const Technologies = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Technologies</h1>
      <div className={styles.skillsWrapper}>
        <SkillIndicator name="HTML/CSS" percentage={85} />
        <SkillIndicator name="JavaScript" percentage={80} />
        <SkillIndicator name="TypeScript" percentage={50} />
        <SkillIndicator name="React" percentage={65} />
      </div>
    </section>
  );
};
