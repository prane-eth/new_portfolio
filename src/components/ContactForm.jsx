import { useState } from 'react';

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
		<form onSubmit={handleSubmit}>
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
			<label htmlFor="message">Message</label>
			<textarea
				id="message"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>
			<button type="submit">Send</button>
		</form>
	);
};

export default ContactForm;