import { FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const ContactForm = () => (
	<div id="ContactForm" className="flex-horizontal">
		<a href="mailto:haripraneethv@gmail.com">
			<CgMail color="#db4437" className="icon-large" />
		</a>
		<a href="https://wa.me/918367458273">
			<FaWhatsapp color="#25d366" className="icon-large" />
		</a>
	</div>
)

export default ContactForm