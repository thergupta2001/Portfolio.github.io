import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Skills from './components/Skills/Skills.jsx'
import '@fontsource/outfit'
import '@fontsource/roboto'

function App() {
  return (
    <>
      <div className={styles.App} style={{width: "100%"}}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
