import { google } from "googleapis";
import nodemailer from "nodemailer";

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN!;
const RECAPTCHA_SECRET = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY!;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// console.log("🌍 ENV CHECK:", {
//   CLIENT_ID,
//   CLIENT_SECRET,
//   REFRESH_TOKEN,
//   GMAIL_USER: process.env.GMAIL_USER,
//   RECAPTCHA_SECRET,
// });

export async function POST(req: Request) {
  try {

    const body = await req.json();
    // console.log("Form submission received:", body);
    const { user_name, user_email, user_phone, message, embed_url, token,additional_info_1, operand_a, operand_b } = body;
    const operandA = parseInt(operand_a, 10);
    const operandB = parseInt(operand_b, 10);
    const expected = operandA + operandB;

    // ✅ 1. Verify the reCAPTCHA token with Google
    const captchaRes = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: RECAPTCHA_SECRET,
        response: token,
      }),
    });

    const captchaData = await captchaRes.json();

// 1. Math question validation
if (!additional_info_1) {
  return new Response(JSON.stringify({ error: "Missing CAPTCHA answer." }), {
    status: 400,
    headers: { "Content-Type": "application/json" },
  });
}

if (parseInt(additional_info_1, 10) !== expected) {
  return new Response(JSON.stringify({ error: "Math CAPTCHA failed." }), {
    status: 400,
    headers: { "Content-Type": "application/json" },
  });
}


if (body.job_title && body.job_title.trim() !== "") {
  return new Response(JSON.stringify({ error: "Bot detected." }), {
    status: 400,
    headers: { "Content-Type": "application/json" },
  });
}

// 2. reCAPTCHA validation
if (!captchaData.success || captchaData.score < 0.5) {
  return new Response(JSON.stringify({ error: "reCAPTCHA verification failed." }), {
    status: 400,
    headers: { "Content-Type": "application/json" },
  });
}

    // ✅ 2. Proceed with sending the email
    // const accessToken = await oAuth2Client.getAccessToken();
    // console.log("🔑 Access Token:", accessToken?.token);

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        // type: "OAuth2",
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_APP_PASSWORD,
        // clientId: CLIENT_ID,
        // clientSecret: CLIENT_SECRET,
        // refreshToken: REFRESH_TOKEN,
        // accessToken: accessToken.token || "",
      },
    });
    await transport.verify()
  .then(() => console.log("✅ Nodemailer is ready to send emails."))
  .catch((err) => console.error("❌ Nodemailer verify failed:", err));


    const mailOptions = {
      from: `"BuildUp University" <${process.env.GMAIL_USER}>`,
      to: "info@buildupuniversity.com,cozywallsinsulation@gmail.com",
      subject: `Contact: "${user_name}"`,
      html: `<table style="background-color: #f7f7f7; width: 100%;">
<tbody>
<tr>
<td>
<table style="margin: auto; padding-top:20px;padding-bottom: 20px;">
<tbody>
<tr>
<td style="text-align: center;"><img src="https://buildupuniversity.com/wp-content/uploads/2025/05/Build-Up-Logo-Black.png" alt="Logo" width="250px" height="auto" /></td>
</tr>
</tbody>
</table>
<table style="background-color: white; width: 100%; max-width: 600px; margin: auto; border-left: 15px solid #f7f7f7; border-right: 15px solid #f7f7f7;">
<tbody>
<tr>
<td style="padding: 20px 20px;">
<p>Hi Cozy Wall! Someone filled the contact form. See details below:</p>
<p><strong>Name:</strong> ${user_name}</p>
<p><strong>Email:</strong> ${user_email}</p>
<p><strong>Phone:</strong> ${user_phone}</p>
<p><strong>Message:</strong> ${message}</p>
</td>
</tr>
</tbody>
</table>
<table style="margin: auto; padding: 20px; width: 100%; max-width: 600px; text-align: center;">
<tbody>
<tr>
<td><em><small><p><strong>Submitted from:</strong> <a href="${embed_url}" target="_blank">${embed_url}</a></p></small></em></td>
</tr>
<tr>
<td>Have questions about the form submission or the website?
Reach out to your web support at <a href="mailto:info@builupuniversity.com">info@builupuniversity.com</a></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>`,
    };

    const result = await transport.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: "Email sent successfully!", data: result }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("🔥 Email send error:", error instanceof Error ? error.stack : JSON.stringify(error));
    return new Response(JSON.stringify({ error: "Email failed to send." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
  
}