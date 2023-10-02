import React, { useState } from 'react'
import styles from './Navbar.module.css'
// import { getImageUrl } from '../../utils';
import menu from '../../assets/nav/menuIcon.png'
import close from '../../assets/nav/closeIcon.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={ styles.navbar }>
        <a href='/' className={styles.title}>Portfolio</a>
        <div className={styles.menu}>
          <img src={ menuOpen ? close : menu } alt='menu - button' className={ styles.menuBtn } onClick={() => setMenuOpen(!menuOpen)} />
            <ul className={ `${styles.menuItems} ${menuOpen && styles.menuOpen}` } onClick={() => setMenuOpen(false)}>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='projects'>Projects</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
