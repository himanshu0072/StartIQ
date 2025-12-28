import { Resend } from "resend";
import { otpEmailTemplate } from "./emailTemplates/otpEmail.js";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendOtpEmail = async ({ to, name, otp }) => {
  try {
    await resend.emails.send({
      from: "StartIQ <onboarding@resend.dev>", // works without domain
      to,
      subject: "Your StartIQ verification code",
      html: otpEmailTemplate({ name, otp }),
    });
  } catch (error) {
    console.error("Resend email error:", error);
    throw error; // optional: remove throw if you want signup to continue
  }
};
