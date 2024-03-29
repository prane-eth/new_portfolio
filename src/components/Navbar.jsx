import { FaSun } from "react-icons/fa";
import { HiOutlineMoon } from "react-icons/hi";
import ProgressBar from 'react-progressbar-on-scroll'

const Navbar = ({ darkMode, toggleDarkMode }) => (
	<nav id="navbar">
		<span className="waving-item">👋</span>
		<span className="i-am-text">I am</span>
		<span id="name">Praneeth</span>

		<div className="navbar-links">
			<a href="#">Home</a>
			<a href="#AboutMe">About Me</a>
			<a href="#Skills">Skills</a>
			<a href="#Experience">Experience</a>
			<a href="#Education">Education</a>
			<a href="#Projects">Projects</a>
			<a href="#Achievements">Achievements</a>
			<a href="#Links">Links</a>
			<a href="#ContactMe">Contact Me</a>
			<span className="darkModeToggle" onClick={toggleDarkMode}>
				{darkMode ? <FaSun /> : <HiOutlineMoon />}
			</span>
			<span className="darkModeToggleText" onClick={toggleDarkMode}>
				← {darkMode ? "Light" : "Dark"} mode
			</span>
		</div>
		<ProgressBar
			height="5px"
			color="#fca311"
			gradient={true}
			gradientColor="#fc0011"
		/>
	</nav>
)

export default Navbar