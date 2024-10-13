import { useState } from 'react';
import styles from './Navbar.module.css';
import menu from '../../assets/nav/menuIcon.png';
import close from '../../assets/nav/closeIcon.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className={styles.navbar}>
      <a href='/' className={styles.title} onClick={(e) => handleScroll(e, 'top')}>Portfolio</a>
      <div className={styles.menu}>
        <img 
          src={menuOpen ? close : menu} 
          alt='menu-button' 
          className={styles.menuBtn} 
          onClick={() => setMenuOpen(!menuOpen)} 
        />
        {/* <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
          <li><a href='#about' onClick={(e) => handleScroll(e, 'about')}>About</a></li>
          <li><a href='#skills' onClick={(e) => handleScroll(e, 'skills')}>Skills</a></li>
          <li><a href='#experience' onClick={(e) => handleScroll(e, 'experience')}>Experience</a></li>
          <li><a href='#projects' onClick={(e) => handleScroll(e, 'projects')}>Projects</a></li>
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;