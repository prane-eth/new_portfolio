import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";

const Projects = () => {
	const projects = [
		{
			title: "Invoice payment system with web3",
			duration: "Dec 2022",
			description: "A web app built with React and Solidity to add and pay invoices using the PAN number of the seller and the buyer.",
			techStack: ["React", "Solidity", "Web3", "Ethereum"],
			github: "https://github.com/vh-praneeth/web3_projects/tree/main/invoice_app-client",
			website: "https://savory-mahogany-lemon.glitch.me/",
		},
		{
			title: "TODO-list with web3",
			duration: "Nov 2022",
			description: "A web app built with React and Solidity to add a task and deposit a reward for finishing the task.",
			techStack: ["React", "Solidity", "Web3", "Ethereum"],
			github: "https://github.com/vh-praneeth/web3_projects/tree/main/todo-client",
			website: "https://river-fork-persimmon.glitch.me/",
		},
		{
			title: "Graveyard tracker",
			duration: "Fall 2021-2022",
			description: "A web app built with React and Node.js that helps find vacancies in the graveyards especially during the pandemic.",
			techStack: ["React", "Node.js", "MongoDB", "Express"],
			github: "",
			website: "",
		},
	]
	return (
		<div className="projects" id="Projects">
			<h1>Projects</h1>
			<div className="projects-container">
				{projects.map((project, index) => (
					<div className="project-card" key={index}>
						<h2>{project.title}</h2>
						<h3>{project.duration}</h3>
						<p>{project.description}</p>
						<div className="project-techstack">
							{project.techStack.map((tech, index) => (
								<span key={index}>{tech}</span>
							))}
						</div>
						<div className="project-links">
							<GitHubIcon href={project.github} target="_blank" rel="noreferrer" />
							<LanguageIcon href={project.website} target="_blank" rel="noreferrer" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;