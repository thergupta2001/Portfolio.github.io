import experience from '../data/experience.json';
import styles from './Skills.module.css';

const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        {experience.map((item, index) => (
          <div key={index} className={styles.experienceCard}>
            <div className={styles.experienceImageContainer}>
              <img src={item.imageSrc} alt={`${item.title} icon`} className={styles.experienceImage} />
            </div>
            <div className={styles.experienceDetails}>
              <h3 className={styles.experienceTitle}>{item.title}</h3>
              <p className={styles.experienceCompany}>{item.company}</p>
              <p className={styles.experienceDescription}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;