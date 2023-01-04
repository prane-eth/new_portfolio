import { useState } from 'react';
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

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
				<FaEnvelope href="mailto:haripraneethv@gmail.com" />
				<FaWhatsapp href="https://wa.me/918367458273" />
			</div>
			<div className="flex-horizontal">
				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
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