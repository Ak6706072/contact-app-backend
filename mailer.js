import nodemailer from "nodemailer";

export const sendmail = async (to, message) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.email,
      pass: process.env.passwd,
    },
  });
  const emailOption = {
    from: "ak6706072@gmail.com",
    to: to,
    subject: "hello From node Mailer",
    html: message,
  };
  //sendmail
  try {
    let info = await transporter.sendMail(emailOption);
    console.log("send mail info", info);
  } catch (e) {
    console.log(e);
  }
};

// transporter.sendMail(emailOption,())
