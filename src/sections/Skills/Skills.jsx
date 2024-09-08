import styles from './SkillsStyles.module.css'
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../assets/common/SkillList';
import { useTheme } from '../../assets/common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1> 
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="R" />
        <SkillList src={checkMarkIcon} skill="PowerBI" />
        <SkillList src={checkMarkIcon} skill="Excel" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="SQL" />
        <SkillList src={checkMarkIcon} skill="JIRA" />
        <SkillList src={checkMarkIcon} skill="Hotjar" />
        
      </div>
      {/* <hr/>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Behavior Analysis ()" />
      </div> */}
    </section>
  );
}

export default Skills;