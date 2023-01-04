import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SlGlobe } from 'react-icons/sl';

const Links = () => (
	<div id="Links" className="flex-horizontal">
		<a href={"https://github.com/vh-praneeth/"}>
			<FaGithub color="black" className="icon-large" />
		</a>
		<a href={"https://www.linkedin.com/in/vh-praneeth/"}>
			<FaLinkedin color="#0A66C2" className="icon-large" />
		</a>
		<a href={"https://linktr.ee/vh.praneeth"}>
			<SlGlobe className="icon-large" />
		</a>
	</div>
)

export default Links