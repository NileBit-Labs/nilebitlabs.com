import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const data = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Client Inquiry (NileBit Labs)" <dysondb4@gmail.com>`,
    replyTo: data.email,
    to: "douglasbagambe4@gmail.com",
    subject: `New Inquiry from ${data.firstName} ${data.lastName}`,
    text: `
        New Contact Form Submission
        ----------------------
        Name: ${data.firstName} ${data.lastName}
        Email: ${data.email}
        Phone: ${data.phone || "Not provided"}
        Company: ${data.company || "Not provided"}
        Role: ${data.role || "Not provided"}
        Service: ${data.service}
        Description: ${data.description}
        Newsletter Subscription: ${data.newsletter ? "Yes" : "No"}
        ----------------------
        Submitted on: ${new Date().toLocaleString()}
      `,
    html: `
        <h2>New Contact Form Submission</h2>
        <hr />
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        <p><strong>Company:</strong> ${data.company || "Not provided"}</p>
        <p><strong>Role:</strong> ${data.role || "Not provided"}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Description:</strong> ${data.description}</p>
        <p><strong>Newsletter Subscription:</strong> ${
          data.newsletter ? "Yes" : "No"
        }</p>
        <hr />
        <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
      `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Inquiry sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send inquiry" },
      { status: 500 }
    );
  }
}
