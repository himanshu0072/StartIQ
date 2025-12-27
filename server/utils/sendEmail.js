import nodemailer from "nodemailer";
import { otpEmailTemplate } from "./emailTemplates/otpEmail.js";

export const sendOtpEmail = async ({ to, name, otp }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"StartIQ" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Your StartIQ verification code",
    html: otpEmailTemplate({ name, otp }),
  });
};
