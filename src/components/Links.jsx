import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { username } from './constants';

const Links = () => (
	<div id="Links">
		<h1>Links</h1>
		<>
			<FaGithub href={`https://github.com/${username}`} />
			<FaLinkedin href={`https://www.linkedin.com/in/${username}`} />
		</>
	</div>
)

export default Links