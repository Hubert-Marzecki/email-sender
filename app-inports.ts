require('dotenv').config()
import sgMail from '@sendgrid/mail';
import express from 'express';
const app = express();

export {sgMail, express, app} 