import nodemailer from "nodemailer"
import logger from "./logger.js";

const transporter = nodemailer.createTransport({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c4ea4a3e3bf973d0995753647d0cc91090c91d9b
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false, 
    auth: {
      user:process.env.SMTP_USER ,
      pass: process.env.SMTP_PASSWORD,
<<<<<<< HEAD
=======
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendEmail = async (to: string, subject: string, html: string) => {
  await transporter.sendMail(
    {
      from: process.env.FROM_EMAIL,
      to: to,
      subject: subject,
      html: html,
>>>>>>> parent of 1a276c3 (queue setup using redis via docker && email service integrated to queue)
=======
>>>>>>> c4ea4a3e3bf973d0995753647d0cc91090c91d9b
    },
  });

  export const  sendMail = async (to:string ,subject:string , html:string) => {
    // send mail with defined transport object
    try {
      await transporter.sendMail({
        from: process.env.FROM_EMAIL,
        to: to, // list of receivers
        subject: subject, 
        html: html, 
      });
    } catch (error) {
        logger.error({type:"Email Error" ,error})
    }
  }