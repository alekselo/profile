import styles from "./styles.module.scss";

type SkillIndicatorProps = {
  name: string;
  percentage: number;
};

export const SkillIndicator = ({ percentage, name }: SkillIndicatorProps) => {
  const level = () => {
    if (percentage < 35) {
      return "Begginer";
    } else if (percentage < 65) {
      return "Regular";
    } else if (percentage < 100) {
      return "Advanced";
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <div className={styles.skillName}>{name}</div>
        <div className={styles.skillLevel}>{level()}</div>
      </div>
      <div className={styles.skillIndicator}>
        <div className={styles.fill} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};
