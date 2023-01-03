import { FaSun } from "react-icons/fa";
import { HiOutlineMoon } from "react-icons/hi";

const Navbar = ({ darkMode, toggleDarkMode }) => (
	<nav className="navbar">
		<span className="waving-item">👋</span>
		I am
		<span id="name">Praneeth</span>
		
		<div className="links">
			<a href="">Home</a>
			<a href="#About">About</a>
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
		</div>
	</nav>
)

export default Navbar