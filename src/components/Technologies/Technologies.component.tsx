import { SkillIndicator } from "../SkillIndicator/SkillIndicator.component";
import { AdditionalSkills } from "./AdditionalSkills/AdditionalSkills.component";
import styles from "./styles.module.scss";

export const Technologies = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Technologies</h1>
      <div className={styles.skillsWrapper}>
        <SkillIndicator name="HTML / CSS" percentage={90} />
        <SkillIndicator name="JavaScript" percentage={80} />
        <SkillIndicator name="React" percentage={65} />
        <SkillIndicator name="Redux / Redux Toolkit" percentage={50} />
        <SkillIndicator name="React Router" percentage={50} />
        <SkillIndicator name="TypeScript" percentage={50} />
        <SkillIndicator name="RTK Query" percentage={20} />
      </div>
      <h2 className={styles.subtitle}>Additional technologies and skills</h2>
      <AdditionalSkills />
    </section>
  );
};
