import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";
import styles from "./About.module.css";
import abtIcon from "../../assets/about/abtIcon.png";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={abtIcon}
          alt="Sitting with laptop"
          className={styles.aboutImg}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="cursor" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Development</h3>
              <p>
                I{"'"}m a budding frontend developer with a growing skill set.
                My skills include React, Next, state management using Recoil, and API integration.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="serverIcon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Development</h3>
              <p>
                I{"'"}m immersed in honing my skills, constructing optimized backend
                systems. My skills include Node.js, Express, MongoDB, Postgres, Prisma ORM, tRPC, with knowledge of TypeScript, DBMS.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
