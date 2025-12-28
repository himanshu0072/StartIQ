import { Resend } from "resend";
import { otpEmailTemplate } from "./emailTemplates/otpEmail.js";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendOtpEmail = async ({ to, name, otp }) => {
  try {
    const result = await resend.emails.send({
      from: `onboarding@resend.dev`,
      to,
      subject: "Your StartIQ verification code",
      html: otpEmailTemplate({ name, otp }),
    });

    console.log("Resend response:", result);
  } catch (error) {
    console.error("Resend email error:", error);
    throw error;
  }
};
