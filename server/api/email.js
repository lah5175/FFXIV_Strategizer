const nodemailer = require('nodemailer');
const {OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET, OAUTH_REFRESH_TOKEN, MY_EMAIL} = require('../../secrets');
const express = require('express');
const router = express.Router();
const {google} = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
  OAUTH_CLIENT_ID,
  OAUTH_CLIENT_SECRET,
  'https://developers.google.com/oauthplayground'
);

oauth2Client.setCredentials({
  refresh_token: OAUTH_REFRESH_TOKEN
});

const accessToken = oauth2Client.getAccessToken();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: MY_EMAIL,
    clientId: OAUTH_CLIENT_ID,
    clientSecret: OAUTH_CLIENT_SECRET,
    refreshToken: OAUTH_REFRESH_TOKEN,
    accessToken
  }
});

router.post('/bugs', async (req, res, next) => {
  try {
    const {email, severity, replicate, message} = req.body;

    const info = await transporter.sendMail({
      from: email,
      to: MY_EMAIL,
      subject: '[Bug Report]',
      text: 
        `Bug Report from ${email}:
        Severity: ${severity}
        Replicated: ${replicate}
        Message: ${message}`,
    })

    console.log('Message sent: ', info.messageId);
    res.sendStatus(200);
  } 
  catch (error) {
    next(error);
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {organization, name, email, message, type} = req.body;

    const info = await transporter.sendMail({
      from: email,
      to: MY_EMAIL,
      subject: `[${type}]`,
      text: 
        `Bug Report from ${email}:
        Organization: ${organization}
        Contact: ${name}
        Message: ${message}`,
    })

    console.log('Message sent: ', info.messageId);
    res.sendStatus(200);
  } 
  catch (error) {
    next(error);
  }
})

module.exports = router;