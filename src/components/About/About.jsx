import React from "react";
import aboutImage from "../../assets/about/aboutImage.png";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";
import styles from "./About.module.css";
import man from "../../assets/about/man.png";
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
                I'm a budding frontend developer with a growing skill set.
                Here's a glimpse of my recent frontend project.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="serverIcon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Development</h3>
              <p>
                I'm immersed in honing my skills, constructing optimized backend
                systems, and refining APIs. Recently, I've translated this
                knowledge into tangible personal projects utilizing the MERN
                stack.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
