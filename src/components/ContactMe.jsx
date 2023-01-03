import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const ContactMe = () => (
	<div className="contactMe" id="ContactMe">
		<h1>Contact Me</h1>
		<p>
			<FaEnvelope href="mailto:haripraneethv@gmail.com" />
			<FaWhatsapp href="https://wa.me/918367458273" />
		</p>
	</div>
)

export default ContactMe