const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LIMITS = {
  name: 120,
  email: 254,
  subject: 200,
  message: 8000,
} as const;

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function validateContactPayload(raw: unknown):
  | { ok: true; data: ContactPayload }
  | { ok: false; error: string } {
  if (!raw || typeof raw !== "object") {
    return { ok: false, error: "Invalid request body" };
  }
  const o = raw as Record<string, unknown>;
  const name = typeof o.name === "string" ? o.name.trim() : "";
  const email = typeof o.email === "string" ? o.email.trim() : "";
  const subject = typeof o.subject === "string" ? o.subject.trim() : "";
  const message = typeof o.message === "string" ? o.message.trim() : "";

  if (!name || !email || !subject || !message) {
    return { ok: false, error: "Missing required fields" };
  }
  if (name.length > LIMITS.name || subject.length > LIMITS.subject) {
    return { ok: false, error: "Field too long" };
  }
  if (message.length > LIMITS.message) {
    return { ok: false, error: "Message too long" };
  }
  if (!EMAIL_RE.test(email) || email.length > LIMITS.email) {
    return { ok: false, error: "Invalid email address" };
  }

  return { ok: true, data: { name, email, subject, message } };
}

export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
