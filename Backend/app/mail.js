const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

const sendEmail = async ({ subject, message }) => {
  return await transporter.sendMail({
    from: "Website Submission", // sender address
    to: process.env.MAIL_RECEIVER, // receiver
    subject: subject,
    text: message,
  });
};

module.exports = { sendEmail };