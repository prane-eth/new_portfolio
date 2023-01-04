import { FaGithub } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { FaReact, FaNodeJs, FaPython, FaEthereum, FaHtml5, FaCss3, FaAndroid, FaJava, FaPhp, FaRaspberryPi } from 'react-icons/fa'
import { TbBrandJavascript } from 'react-icons/tb'
import { SiSolidity, SiMongodb, SiMysql } from 'react-icons/si'

const Projects = () => {
	const projects = [
		{
			title: "Invoice payment system with web3",
			duration: "Dec 2022",
			description: "A web app built with React and Solidity to add and pay invoices using the PAN number of the seller and the buyer.",
			techStack: ["React", "Solidity", "Ethereum (web3)"],
			github: "https://github.com/vh-praneeth/web3_projects/tree/main/invoice_app-client",
			website: "https://savory-mahogany-lemon.glitch.me/",
			important: true
		},
		{
			title: "TODO-list with web3",
			duration: "Nov 2022",
			description: "A web app built with React and Solidity to add a task and deposit a reward for finishing the task.",
			techStack: ["React", "Solidity", "Ethereum (web3)"],
			github: "https://github.com/vh-praneeth/web3_projects/tree/main/todo-client",
			website: "https://river-fork-persimmon.glitch.me/",
			important: true
		},
		{
			title: "Graveyard tracker",
			duration: "Fall 2021-22",
			description: "A web app built with React and Node.js that helps find vacancies in the graveyards especially during the pandemic.",
			techStack: ["React", "Node.js", "MongoDB"],
			github: "https://github.com/vh-praneeth/Graveyard_tracker",
			website: "https://gyard.herokuapp.com/",
			important: true
		},
		{
			title: "FB replier",
			duration: "Fall 2021-22",
			description: "A project with React and Node.js that lets us reply for all the Facebook messages and post comments from a single page with multiple conversations.",
			techStack: ["React", "Node.js", "MongoDB"],
			github: "https://github.com/vh-praneeth/FB_replier",
			website: "",
			important: true
		},
		{
			title: "Crypto price alerts",
			duration: "Fall 2021-22",
			description: "A Python project that fetches the price of the cryptocurrency and sends price alerts.",
			techStack: ["Python", "Flask", "MySQL"],
			github: "https://github.com/vh-praneeth/Crypto_price_alerts",
			website: "",
			important: false
		},
		{
			title: "COVIneeD helper",
			duration: "Winter 2020-21",
			description: "An Android app to find the available slots for COVID vaccines and to order emergency items.",
			techStack: ["Android", "Java"],
			github: "https://github.com/vh-praneeth/COVI-neeD_helper",
			website: "",
			important: false
		},
		{
			title: "SendAS",
			duration: "Winter 2020-21",
			description: "A PHP web app to send and receive files in a secure way with privacy. Won a hackathon.",
			techStack: ["PHP", "MySQL"],
			github: "https://github.com/vh-praneeth/SendAS",
			website: "http://sendas.totalh.net/",
			important: true
		},
		{
			title: "Online Voting System",
			duration: "Fall 2019-20",
			description: "A web app to vote online during elections.",
			techStack: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
			github: "https://github.com/vh-praneeth/online_voting_system_flask",
			website: "",
			important: false
		},
		{
			title: "Accident alert system",
			duration: "Fall 2019-20",
			description: "A Raspberry Pi project with Python to detect accidents and send alerts to other people.",
			techStack: ["Python", "Raspberry Pi"],
			github: "https://github.com/vh-praneeth/RPi_accident_alert_system",
			website: "",
			important: false
		},
	]
	const getTechIcon = (name) => {
		if (name === "React") return <FaReact />
		if (name === "Node.js") return <FaNodeJs />
		if (name === "Python") return <FaPython />
		if (name === "Solidity") return <SiSolidity />
		if (name === "Ethereum (web3)") return <FaEthereum />
		if (name === "MongoDB") return <SiMongodb />
		if (name === "JS" || name === "JavaScript") return <TbBrandJavascript />
		if (name === "Flask") return null
		if (name === "MySQL") return <SiMysql />
		if (name === "HTML") return <FaHtml5 />
		if (name === "CSS") return <FaCss3 />
		if (name === "Android") return <FaAndroid />
		if (name === "Java") return <FaJava />
		if (name === "PHP") return <FaPhp />
		if (name === "Raspberry Pi") return <FaRaspberryPi />
		return name
	}
	return (
		<div id="Projects">
			{projects.map((project, index) => (
				<div className="project-card" key={index}>
					<h2>{project.title}</h2> - {project.duration}
					<p>{project.description}</p>
					<div className="project-techstack">
						{project.techStack &&
							<>
								Tech stack: {project.techStack.map((tech, index) => (
									<span key={index} title={tech}>{getTechIcon(tech)}</span>
								))}
							</>
						}
					</div>
					<div className="project-links">
						Links:
						{project.github &&
							<a href={project.github} target="_blank" rel="noreferrer"><FaGithub color="black" /></a>
						}
						{project.website &&
							<a href={project.website} target="_blank" rel="noreferrer"><BsGlobe color="blue" /></a>
						}
					</div>
				</div>
			))}

			{/* show github logo for more projects */}
			<div className="project-card">
				<h2>More projects</h2>
				<div className="project-links">
					<FaGithub href="https://github.com/vh-praneeth?tab=repositories" target="_blank" rel="noreferrer" />
				</div>
			</div>
		</div>
	);
};

export default Projects