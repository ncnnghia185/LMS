const nodemailer = require("nodemailer");

const sendMail = async (data, req, res) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_ID,
      pass: process.env.MAIL_PASS,
    },
  });
  let infor = await transporter.sendMail({
    from: "Developer Corner",
    to: data.to,
    subject: data.subject,
    text: data.text,
    html: data.html,
  });
};

module.exports = sendMail;
