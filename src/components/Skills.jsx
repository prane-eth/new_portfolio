import { FaReact, FaNodeJs, FaPython, FaEthereum } from 'react-icons/fa'
import { TbBrandJavascript } from 'react-icons/tb'
import { SiDjango, SiMongodb, SiSolidity } from 'react-icons/si'

const technologies = [
	{ Icon: FaReact, color: "#61dbfb", name: "React" },
	{ Icon: SiSolidity, color: '#002fa7', darkColor: 'blue', name: "Solidity" },
	{ Icon: FaEthereum, color: "#3c3c3d", darkColor: '#ecf0f1', name: "Ethereum (Web3)" },
	{ Icon: FaNodeJs, color: "#339933", darkColor: '#66cc33', name: "Node.js" },
	{ Icon: TbBrandJavascript, color: "#f0db4f", name: "JavaScript" },
	{ Icon: SiMongodb, color: "#4db33d", name: "MongoDB" },
	{ Icon: FaPython, color: "#ffd43b", name: "Python" },
	{ Icon: SiDjango, color: "#092e20", name: "Django" },
]

const Skills = ({ darkMode }) => (
	<div id="Skills" className="skills-container-grid">
		{technologies.map(({ Icon, color, darkColor, name }) => (
			<span key={name}>
				<Icon color={darkMode ? darkColor : color} className='icon-large' /> {name}
			</span>
		))}
	</div>
)

export default Skills