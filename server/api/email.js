const nodemailer = require('nodemailer');
const {MY_EMAIL, MY_PASSWORD} = require('../../secrets');
const express = require('express');
const router = express.Router();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  auth: {
    user: MY_EMAIL,
    pass: MY_PASSWORD,
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

module.exports = router;