import './App.scss'
import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Skills from './components/Skills'
import Links from './components/Links'
import ContactMe from './components/ContactInfo'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Achievements />
      <Skills />
      <Links />
      <ContactMe />
      <ContactForm />
    </>
  )
}

export default App
