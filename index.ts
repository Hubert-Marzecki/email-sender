import {app, express, sgMail} from './app-inports';
import {emailTemplate} from './templates/'
import {sendEmails} from './send-emails'
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const send = true

if(send) {
	sendEmails([{email: "jakisprojekt13@gmail.com", name: "ja"}], emailTemplate)
}