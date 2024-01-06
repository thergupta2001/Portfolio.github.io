import React from "react";
import projectImg from "./project.png";
import styles from "./ProjectCard.module.css";
import projects from "../data/projects.json";

const ProjectCard = (props) => {
  // console.log(props.skills)

  return (
    <div className={styles.container}>
      <img src={projectImg} alt={props.title} className={styles.image} />
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.description}>{props.description}</p>
      <ul className={styles.skills}>
        {props.skills.map((skill, id) => {
          return (
               <li className={styles.skill} key={id}>{skill}</li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={props.source} className={styles.link}>Source</a>
      </div>
    </div>
  );
};

export default ProjectCard;
