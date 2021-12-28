
import {sgMail} from './app-inports';

interface EmailsProps {
    email: string,
    name: string,
}

type SendEmailProps = (emails: EmailsProps[], fn: (name: string) => string) =>  void

export const sendEmails : SendEmailProps = (emails, emailTemplate)  => {
	if (typeof process.env.NODE_ENV_SG === 'undefined') {
		console.log('process env undefined');
		return;
	} else {
		sgMail.setApiKey(process.env.NODE_ENV_SG);
	}

	emails.forEach(({ email, name }) => {
		const msg = {
			to: email,
			from: 'hubert.marzecki@gmail.com',
			subject: 'Motyw na zajawkę',
			text: 'Motyw na zajawkę',
			html: emailTemplate(name)
		};
		sgMail
			.send(msg)
			.then(() => {
				console.log(`Email sent to ${msg.to}`);
			})
			.catch((error) => {
				console.error(error);
			});
	});
};