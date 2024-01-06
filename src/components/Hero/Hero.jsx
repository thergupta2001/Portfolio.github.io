import React from 'react'
import heroImage from '../../assets/hero/heroImage.png'
import styles from './Hero.module.css'
import rohan from '../../assets/hero/rohan.jpeg'

const Hero = () => {
  return (
    <section className={styles.container}>
      {/* <img src={ heroImage } alt='HeroImage' className={styles.heroImg} /> */}
        <div className={styles.content}>
            <h1 className={styles.title}>Hello, this is Rohan</h1>
            <p className={styles.description}>I'm a third-year student at IIT (ISM), Dhanbad, stepping into the world of <b>WEB DEVELOPMENT</b>. Open to opportunities, feel free to reach out if you want to know more!</p>
            <a href='mailto:2001.rohangupta@gmail.com' className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={ rohan } alt='HeroImage' className={styles.heroImg} />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero
