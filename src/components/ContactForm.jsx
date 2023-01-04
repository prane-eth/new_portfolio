import { useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const ContactForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ name, email, message });
		setName('');
		setEmail('');
		setMessage('');
	};

	return (
		<form onSubmit={handleSubmit} className="flex-vertical">
			<div className="flex-horizontal">
				<a href="mailto:haripraneethv@gmail.com">
					<CgMail color="#db4437" className="icon-large" />
				</a>
				<a href="https://wa.me/918367458273">
					<FaWhatsapp color="#25d366" className="icon-large" />
				</a>
			</div>
			<div className="flex-horizontal">
				<label htmlFor="nameInForm">Name</label>
				<input
					type="text"
					id="nameInForm"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<label htmlFor="emailInForm">Email</label>
				<input
					type="email"
					id="emailInForm"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div className="flex-horizontal">
				<label htmlFor="message">Message</label>
				<textarea
					id="message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
			</div>
			<button type="submit">Send</button>
		</form>
	);
}

export default ContactForm