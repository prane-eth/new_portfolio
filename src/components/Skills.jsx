import { FaReact, FaNodeJs, FaPython, FaEthereum } from 'react-icons/fa'
import { TbBrandJavascript } from 'react-icons/tb'
import { SiDjango, SiMongodb, SiSolidity } from 'react-icons/si'

const Skills = ({ darkMode }) => (
	<div id="Skills" className="skills-container-grid">
		<span> <FaReact color="#61dbfb" className='icon-large' /> React </span>
		<span>
			<SiSolidity color={darkMode ? 'blue' : '#002fa7'} className='icon-large' />
			Solidity
		</span>
		<span>
			<FaEthereum color={darkMode ? '#ecf0f1' : "#3c3c3d"} className='icon-large' />
			Ethereum (Web3)
		</span>
		<span>
			<FaNodeJs color={darkMode ? '#66cc33' : "#339933"} className='icon-large' />
			Node.js
		</span>
		<span> <TbBrandJavascript color="#f0db4f" className='icon-large' /> JavaScript </span>
		<span> <SiMongodb color="#4db33d" className='icon-large' /> MongoDB </span>
		<span> <FaPython color="#ffd43b" className='icon-large' /> Python </span>
		<span> <SiDjango color="#092e20" className='icon-large' /> Django </span>
	</div>
)

export default Skills