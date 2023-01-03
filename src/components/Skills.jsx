import { FaReact, FaNodeJs, FaPython, FaEthereum } from 'react-icons/fa'
import { TbBrandJavascript } from 'react-icons/tb'
import { SiSolidity } from 'react-icons/si'

const Skills = () => (
	<div id="Skills">
		<h1>Skills</h1>
		<div className="skills-container-grid">
			<span> <FaReact /> React </span>
			<span> <SiSolidity /> Solidity </span>
			<span> <FaEthereum /> Ethereum (Web3) </span>
			<span> <FaNodeJs /> Node.js </span>
			<span> <TbBrandJavascript /> JavaScript </span>
			<span> <FaPython /> Python </span>
		</div>
	</div>
)

export default Skills