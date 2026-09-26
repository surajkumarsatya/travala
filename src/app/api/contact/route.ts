import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `New Travel Inquiry from ${name}`,
      text: `
        New Travel Inquiry

        Name: ${name}
        Email: ${email}
        Phone: ${phone || "Not provided"}

        Message:
        ${message}
      `,
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: "Thank you for contacting Travala",
      text: `
        Hi ${name},

        Thank you for contacting Travala.

        We have received your travel inquiry and our team will get back to you shortly.

        Here is a copy of your inquiry:

        Name: ${name}
        Phone: ${phone || "Not provided"}

        Message:
        ${message}

        Best regards,
        Travala
      `,
    });

    return NextResponse.json(
      { message: "Inquiry sent successfully." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}