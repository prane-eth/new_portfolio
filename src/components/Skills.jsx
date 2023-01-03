import { FaReact, FaNodeJs, FaPython, FaEthereum } from 'react-icons/fa'
import { TbBrandJavascript } from 'react-icons/tb'
import { SiSolidity } from 'react-icons/si'

const Skills = () => (
	<div className="skills" id="Skills">
		<h1>Skills</h1>
		<div className="skills-container">
			<h2>Technologies</h2>
			<div className="skills-container">
				<div> <FaReact /> React </div>
				<div> <SiSolidity /> Solidity </div>
				<div> <FaEthereum /> Ethereum (Web3) </div>
				<div> <FaNodeJs /> Node.js </div>
				<div> <TbBrandJavascript /> JavaScript </div>
				<div> <FaPython /> Python </div>
			</div>
		</div>
	</div>
)

export default Skills