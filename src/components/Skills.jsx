import { FaReact, FaNodeJs, FaPython, FaEthereum } from 'react-icons/fa'
import { TbBrandJavascript } from 'react-icons/tb'
import { SiSolidity } from 'react-icons/si'

const Skills = () => (
	<div id="Skills" className="skills-container-grid">
		<span> <FaReact color="#61dbfb" className='icon-large' /> React </span>
		<span> <SiSolidity color="#002fa7" className='icon-large' /> Solidity </span>
		<span> <FaEthereum color="#3c3c3d" className='icon-large' /> Ethereum (Web3) </span>
		<span> <FaNodeJs color="green" className='icon-large' /> Node.js </span>
		<span> <TbBrandJavascript color="#f0db4f" className='icon-large' /> JavaScript </span>
		<span> <FaPython color="#ffd43b" className='icon-large' /> Python </span>
	</div>
)

export default Skills