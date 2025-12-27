export const otpEmailTemplate = ({ name, otp }) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Verify your email</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f4f6f8; font-family:Arial, sans-serif;">
    
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding:40px 0;">
          
          <!-- Container -->
          <table width="100%" max-width="520" style="background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.05);" cellpadding="0" cellspacing="0">
            
            <!-- Header -->
            <tr>
              <td align="center" style="background:#0f172a; padding:20px;">
                <h1 style="color:#ffffff; margin:0; font-size:22px; letter-spacing:0.5px;">
                  Start<span style="color:#38bdf8;">IQ</span>
                </h1>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:30px; color:#111827;">
                <h2 style="margin-top:0;">Verify your email address</h2>

                <p style="font-size:15px; line-height:1.6;">
                  Hi ${name || "there"},
                </p>

                <p style="font-size:15px; line-height:1.6;">
                  Use the verification code below to complete your StartIQ registration.
                </p>

                <!-- OTP Box -->
                <div style="margin:30px 0; text-align:center;">
                  <span style="
                    display:inline-block;
                    background:#f1f5f9;
                    padding:14px 28px;
                    font-size:26px;
                    letter-spacing:6px;
                    font-weight:700;
                    border-radius:6px;
                    color:#0f172a;
                  ">
                    ${otp}
                  </span>
                </div>

                <p style="font-size:14px; color:#374151;">
                  This code is valid for <strong>10 minutes</strong>.  
                  Please do not share it with anyone.
                </p>

                <p style="font-size:14px; color:#6b7280;">
                  If you didn’t request this, you can safely ignore this email.
                </p>

                <p style="margin-top:30px; font-size:14px;">
                  — Team StartIQ
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="background:#f9fafb; padding:16px; font-size:12px; color:#6b7280;">
                © ${new Date().getFullYear()} StartIQ. All rights reserved.
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
  </html>
  `;
};
