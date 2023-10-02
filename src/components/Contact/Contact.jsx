import React from 'react'
import email from '../../assets/contact/emailicon.png'
import linkedin from '../../assets/contact/linkedinIcon.png'
import github from '../../assets/contact/githubIcon.png'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <footer className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>

        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={email} alt='email'/>
                <a href='mailto:2001.rohangupta@gmail.com'>2001.rohangupta@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={linkedin} alt='Linkedin'/>
                <a href='https://www.linkedin.com/in/rohan-gupta-88319422a/'>LinkedIn</a>
            </li>
            <li className={styles.link}>
                <img src={github} alt='Github'/>
                <a href='https://github.com/thergupta2001'>Github</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
