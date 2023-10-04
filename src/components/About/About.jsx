import React from "react";
import aboutImage from "../../assets/about/aboutImage.png";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";
import styles from "./About.module.css";
import man from "../../assets/about/man.png";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Sitting with laptop"
          className={styles.aboutImg}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="cursor" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Development</h3>
              <p>
                I am a fresher in field the frontend development. As you can
                see, this is my frontend project.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="serverIcon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Development</h3>
              <p>
                I am learning and building projects about optimized back-end
                systems and rendering APIs.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
