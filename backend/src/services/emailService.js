const sgMail = require("../config/sendgrid");

const sendEmail = async ({ to, subject, text }) => {
  const msg = {
    to,
    from: process.env.SENDGRID_FROM_EMAIL,
    subject,
    text,
  };

  await sgMail.send(msg);
};

const sendBulkEmails = async ({ contacts, subject, body }) => {
  for (const contact of contacts) {
    const personalizedBody = body.replace("{{name}}", contact.name);

    const msg = {
      to: contact.email,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject,
      text: personalizedBody,
    };

    await sgMail.send(msg);
  }
};

module.exports = { sendEmail, sendBulkEmails };
