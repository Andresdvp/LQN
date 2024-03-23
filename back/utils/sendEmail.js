const nodemailer = require("nodemailer");

const sendEmail = async options => {
  const transport = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    auth: {
      user: "lqn2024@outlook.com",
      pass: "kygaymyyuwdbqxvq"
    }
  });

  const mensaje = {
    from: "LQN Store <lqn2024@outlook.com>",
    to: options.email,
    subject: options.subject,
    text: options.mensaje
  }

  await transport.sendMail(mensaje)
}

module.exports = sendEmail;

