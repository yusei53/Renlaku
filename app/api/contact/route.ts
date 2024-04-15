import { NextResponse, type NextRequest } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { contactEmail, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_GMAILUSER,
      pass: process.env.NEXT_PUBLIC_GMAILPASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: contactEmail,
    to: process.env.NEXT_PUBLIC_GMAILUSER,
    subject: `Renlaku お問い合わせ(${contactEmail}様より)`,
    text: message,
  };

  try {
    await transport.sendMail(mailOptions);
    return NextResponse.json({ message: "Success!", status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Failed!", status: 500 });
  }
}
