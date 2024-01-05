import React from 'react'
import skills from '../data/skills.json'
import styles from './Experience.module.css'

// const skills = [
//     {
//         "title": "HTML",
//         "imageSrc": "../../assets/skills/html.png"
//     }
// ]

const Experience = () => {
  return (
    <section id="skills" className={styles.container}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.content}>
            <div className={styles.skills}>{
              skills.map((skill, id) => {
                return <div key={id} className={styles.skill}>
                    <div className={styles.skillImageContainer}><img src={skill.imageSrc} alt={skill.title} /></div>
                    <p>{skill.title}</p>
                </div>
              })
            }</div>
        </div>
    </section>
  )
}

export default Experience
