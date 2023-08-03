import Zee_logo from "../assets/ZEE5_logo.svg"

const Internships = () => {

	// 	ASDE Intern Jan 2022 - Jun 2022
	// Zee Entertainment Enterprises Limited
	// Full-stack Web Developer Jul 2021 - Dec 2021
	// ProtoHubs Technology LLP
	// Data Engineer Intern Oct 2020 - Dec 2020
	// Algoix Technologies LLP
	const data = [
		{
			company: "Zee Entertainment Enterprises Limited",
			logo: Zee_logo,
			link: "https://www.zee.com/",
			role: "Associate Software Development Engineer (ASDE) Intern",
			period: "January 2022 - June 2022",
			months: 6,
			technologies: ["React", "Git", "MongoDB", "Kafka", "MySQL", "Spring Boot"],
			description: [
				"Worked on the backend of ZEE5, a popular OTT platform",
				"Built backend and full-stack projects by solving the challenges",
				"Joined for internship in January 2022"
			]
		},
		{
			company: "ProtoHubs Technology LLP",
			logo: "https://protohubs.io/images/protohubs_logo.png",
			link: "https://protohubs.io/",
			role: "Full-stack Web Developer Intern",
			period: "July 2021 - December 2021",
			months: 6,
			technologies: ["React", "Node.js", "MongoDB", "Express.js", "Git"],
			description: [
				"Worked on a project that lets anyone create VR/AR apps without code",
			]
		},
		{
			company: "Algoix Technologies",
			logo: "https://lh3.googleusercontent.com/V9DSWIj98sMCLvMpslW_teL5FHAB9YAAx3inwHU4m3J4dDKjob0VDdHLvsvtKtXIxJDphfh_rJG7-O1Zf9Q7cNs=w16383",
			link: "https://www.algoix.in/",
			role: "Data Engineer Intern",
			period: "October 2020 - December 2020",
			months: 3,
			technologies: ["Python", "Git", "MySQL", "Flask"],
			description: [
				"Worked on projects to automate the data extraction and processing",
			]
		}
	]

	return (
		<div id="Internships">
			{data.map((item, index) => (
				<div key={index}>
					<h2 style={{ marginBottom: 0 }}>{item.role}</h2>
					<h3 style={{ marginTop: 0 }}>
						<a href={item.link} target="_blank" rel="noopener noreferrer">
							<img src={item.logo} className="logo" alt=" " />
						</a>
						{item.company}</h3>
					<ul>
						{item.description.map((desc, index) => (
							<li key={index}>{desc}</li>
						))}
					</ul>
					<p>
						Tech stack:&nbsp;
						{item.technologies.map((tech, index) => (
							<span key={index} className="tech">
								{tech}{index !== item.technologies.length - 1 && ", "}
							</span>
						))}
					</p>
				</div>
			))}
		</div>
	)
}

export default Internships