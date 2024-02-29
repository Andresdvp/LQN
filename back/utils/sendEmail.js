const nodemailer = require("nodemailer");

const sendEmail = async options => {
  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e979fe6af063ab",
      pass: "16cc7ba13b900c"
    }
  });

  const mensaje = {
    from: "LQN Store <noreply@loquenecesitas.com>",
    to: options.email,
    subject: options.subject,
    text: options.mensaje
  }

  await transport.sendMail(mensaje)
}

module.exports = sendEmail;

