import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { config, isEmailConfigured } from "@/lib/config";
import { addMessage } from "@/lib/messageStore";
import { rateLimitContact } from "@/lib/rateLimit";
import { escapeHtml, validateContactPayload } from "@/lib/validation";

export async function POST(request: Request) {
  const limited = rateLimitContact(request);
  if (!limited.ok) {
    return NextResponse.json(
      { message: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
    }

    const valid = validateContactPayload(body);
    if (!valid.ok) {
      return NextResponse.json({ message: valid.error }, { status: 400 });
    }

    const { name, email, subject, message } = valid.data;

    const messageId = addMessage({
      name,
      email,
      subject,
      message,
    });

    if (process.env.NODE_ENV !== "production") {
      console.log(`New message from ${name} (${email}): ${subject}`);
    }

    if (!isEmailConfigured()) {
      if (process.env.NODE_ENV === "production") {
        return NextResponse.json(
          {
            message: "Message received. Thank you for contacting us.",
            messageId,
            error: "Email not configured",
          },
          { status: 200 }
        );
      }
      return NextResponse.json(
        {
          message:
            "Message received. Email delivery is not configured, but your message has been saved.",
          to: config.email.recipient,
          messageId,
          error: "Email not configured - check server logs for setup instructions",
        },
        { status: 200 }
      );
    }

    try {
      const transporter = nodemailer.createTransport({
        service: config.email.service,
        auth: {
          user: config.email.user,
          pass: config.email.pass,
        },
        debug: process.env.NODE_ENV !== "production",
      });

      if (process.env.NODE_ENV !== "production") {
        console.log(
          `Attempting to send email to ${config.email.recipient} using ${config.email.user}`
        );
      }

      const safeName = escapeHtml(name);
      const safeEmail = escapeHtml(email);
      const safeSubject = escapeHtml(subject);
      const safeBody = escapeHtml(message).replace(/\n/g, "<br>");

      const mailOptions = {
        from: `"Portfolio Contact Form" <${config.email.user}>`,
        replyTo: email,
        to: config.email.recipient,
        subject: `Contact Form: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <p><strong>Message:</strong></p>
          <p>${safeBody}</p>
        `,
      };

      const info = await transporter.sendMail(mailOptions);
      if (process.env.NODE_ENV !== "production") {
        console.log("Email sent successfully:", info.response);
      }

      return NextResponse.json({
        message: "Message sent successfully! Thank you for contacting us.",
        success: true,
        messageId,
      });
    } catch (error: unknown) {
      const err = error as { code?: string; message?: string };

      if (process.env.NODE_ENV !== "production") {
        console.error("Error sending email:", error);
      }

      if (
        err.code === "EAUTH" &&
        err.message?.includes("Username and Password not accepted")
      ) {
        if (process.env.NODE_ENV === "production") {
          return NextResponse.json({
            message: "Thank you for your message. We will get back to you soon.",
            success: false,
            messageId,
            error: "Email authentication failed",
          });
        }
        return NextResponse.json({
          message:
            "Message saved but email delivery failed. Gmail requires an App Password - please check server logs.",
          success: false,
          messageId,
          error: "Gmail authentication failed - need App Password",
        });
      }

      if (process.env.NODE_ENV === "production") {
        return NextResponse.json({
          message: "Thank you for your message. We will get back to you soon.",
          success: false,
          messageId,
          error: "Email delivery failed",
        });
      }
      return NextResponse.json({
        message: "Message saved but email delivery failed. Please check server logs.",
        success: false,
        messageId,
        error: "Email delivery failed",
      });
    }
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Error processing request:", error);
    }
    return NextResponse.json(
      { message: "Failed to process your request. Please try again." },
      { status: 500 }
    );
  }
}
