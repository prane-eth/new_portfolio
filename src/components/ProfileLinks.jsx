import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SlGlobe } from 'react-icons/sl';
import { githubUrl, username, linktree_username } from './constants';

const ProfileLinks = () => (
	<div id="ProfileLinks" className="flex-horizontal">
		<a href={githubUrl}>
			<FaGithub color="black" className="icon-large" />
		</a>
		<a href={`https://www.linkedin.com/in/${username}`}>
			<FaLinkedin color="#0A66C2" className="icon-large" />
		</a>
		<a href={`https://linktr.ee/${linktree_username}`}>
			<SlGlobe className="icon-large" />
		</a>
	</div>
)

export default ProfileLinks