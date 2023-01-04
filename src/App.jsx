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

  const componentsToRender = [AboutMe, Skills, Experience, Education, Projects, Achievements, Links, ContactMe];
  const componentNames = {
    "AboutMe": "About Me",
    "ContactMe": "Contact Me",
    "Links": "Profile links",
  }

  return (
    <div className={darkMode ? "mainContainer darkmode" : "mainContainer"}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {componentsToRender.map((Component, index) => (
        <div className="flex-horizontal sectionDiv" key={index}>
          <h1 className="sectionName">
            {componentNames[Component.name] || Component.name}
          </h1>
          <Component />
        </div>
      ))}
      <ContactForm />
    </div>
  )
}

export default App
