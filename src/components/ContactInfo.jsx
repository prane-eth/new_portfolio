import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const ContactMe = () => {
	return (
		<div>
			<h1>Contact Me</h1>
			<p>
				You can contact me at
				<FaEnvelope href="mailto:haripraneethv@gmail.com" />
				<FaWhatsapp href="https://wa.me/918367458273" />
			</p>
		</div>
	);
};

export default ContactMe;