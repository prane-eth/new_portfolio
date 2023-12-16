import { FaReact, FaNodeJs, FaPython, FaEthereum, FaAws } from 'react-icons/fa'
import { TbBrandJavascript } from 'react-icons/tb'
import { SiDjango, SiMicrosoftazure, SiMongodb, SiSolidity } from 'react-icons/si'

const technologies = [
	{ name: "React", Icon: FaReact, color: "#61dbfb" },
	{ name: "Node JS", Icon: FaNodeJs, color: "#339933", darkColor: '#66cc33' },
	{ name: "Solidity", Icon: SiSolidity, color: '#002fa7', darkColor: 'blue' },
	{ name: "Ethereum & Web3", Icon: FaEthereum, color: "#3c3c3d", darkColor: '#ecf0f1' },
	{ name: "JavaScript", Icon: TbBrandJavascript, color: "#f0db4f" },
	{ name: "MongoDB", Icon: SiMongodb, color: "#4db33d" },
	{ name: "Python", Icon: FaPython, color: "#ffd43b" },
	{ name: "Django", Icon: SiDjango, color: "#092e20" },
	{ name: "AWS S3", Icon: FaAws, color: "#FF9900" },
	{ name: "Azure Storage", Icon: SiMicrosoftazure, color: "#0089D6" },
]

const Skills = ({ darkMode }) => (
	<div id="Skills" className="skills-container-grid">
		{technologies.map(({ Icon, color, darkColor, name }) => (
			<span key={name}>
				<Icon color={darkMode && darkColor ? darkColor : color} className='icon-large' /> {name}
			</span>
		))}
	</div>
)

export default Skills