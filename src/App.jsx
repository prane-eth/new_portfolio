import { useState, useEffect } from 'react'

import './App.scss'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Internships from './components/Internships'
import Education from './components/Education'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Skills from './components/Skills'
import ProfileLinks from './components/ProfileLinks'
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

  const componentsList = [AboutMe, Skills, Experience, Internships, Education, Projects, Achievements, ProfileLinks];
  const componentNames = {
    "AboutMe": "About Me",
    "ProfileLinks": "Profile links",
  }

  return (
    <div className={darkMode ? "mainContainer darkmode" : "mainContainer"}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {componentsList.map((Component, index) => (
        <div className="flex-horizontal sectionDiv" key={index}>
          <h1 className="sectionName">
            {componentNames[Component.name] || Component.name}
          </h1>
          <Component darkMode={darkMode} />
        </div>
      ))}
      <h1 className="sectionName">Contact Me</h1>
      <ContactForm />
    </div>
  )
}

export default App
