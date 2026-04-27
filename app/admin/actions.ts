"use server";

import nodemailer from "nodemailer";
import { config, isEmailConfigured } from "@/lib/config";

export type TestEmailResult =
  | { ok: true; message: string }
  | { ok: false; message: string };

export async function sendTestEmailAction(): Promise<TestEmailResult> {
  if (!isEmailConfigured()) {
    return {
      ok: false,
      message:
        "Email is not configured. Set EMAIL_USER and EMAIL_PASS in environment variables.",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: config.email.service,
      auth: {
        user: config.email.user,
        pass: config.email.pass,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Test" <${config.email.user}>`,
      to: config.email.recipient,
      subject: "Test Email from Portfolio Contact Form",
      text: `Test email — configuration is working.\nRecipient: ${config.email.recipient}`,
      html: `<p>Test email — configuration is working.</p><p>Recipient: ${config.email.recipient}</p>`,
    });

    return { ok: true, message: "Test email sent. Check your inbox." };
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Failed to send";
    return { ok: false, message: msg };
  }
}
