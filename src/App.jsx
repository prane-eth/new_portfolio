import { useState, useEffect } from 'react'

import './App.scss'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Skills from './components/Skills'
import Links from './components/Links'
import ContactMe from './components/ContactMe'
import ContactForm from './components/ContactForm'

function App() {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		localStorage.setItem("darkMode", !darkMode);
		setDarkMode(!darkMode);
  };
  useEffect(() => {
		// get dark mode from local storage
		const localDarkMode = localStorage.getItem("darkMode");
    if (localDarkMode) setDarkMode(JSON.parse(localDarkMode));
  }, []);
  
  return (
    <div className={darkMode ? "mainContainer darkmode" : "mainContainer"}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Achievements />
      <Links />
      <ContactMe />
      <ContactForm />
    </div>
  )
}

export default App
