"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [recipient, setRecipient] = useState(profile.contact.email);
  const [messageId, setMessageId] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const inputClass =
    "block w-full rounded-xl border border-slate-200/90 bg-white/90 p-3 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/25 dark:border-slate-600 dark:bg-slate-900/80 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-400 sm:p-3.5";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);
    setErrorMessage("");
    setMessageId("");
    const emailBeforeSubmit = formData.email;

    try {
      await new Promise((resolve) => setTimeout(resolve, 600));

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.to) setRecipient(data.to);
      if (data.messageId) setMessageId(data.messageId);

      if (response.ok) {
        setSubmittedEmail(emailBeforeSubmit);
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        if (data.error) {
          setErrorMessage(
            `Note: ${data.error}. Your message has been recorded.`
          );
        }
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      setSubmitError(true);
      setErrorMessage(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-panel rounded-2xl p-5 sm:p-8">
      <h2 className="mb-6 text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
        Send a message
      </h2>

      <AnimatePresence mode="wait">
        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-6 rounded-xl border border-emerald-200/80 bg-emerald-50/90 p-4 text-sm text-emerald-900 dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-100"
          >
            <span className="font-semibold">Message received.</span>{" "}
            We&apos;ll get back to you soon
            {submittedEmail ? (
              <>
                {" "}
                at <span className="font-medium">{submittedEmail}</span>
              </>
            ) : null}
            .
            {messageId ? (
              <p className="mt-2 text-xs opacity-90">
                Reference: <span className="font-mono">{messageId}</span>
              </p>
            ) : null}
            {errorMessage ? (
              <p className="mt-2 text-xs text-amber-800 dark:text-amber-200/90">
                {errorMessage}
              </p>
            ) : (
              <p className="mt-2 text-xs opacity-90">
                You can also reach me directly at {recipient}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {submitError && (
        <div className="mb-6 rounded-xl border border-red-200/80 bg-red-50/90 p-4 text-sm text-red-900 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-100">
          <span className="font-semibold">Something went wrong.</span>{" "}
          {errorMessage ||
            `Please try again or email ${recipient}`}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={inputClass}
            placeholder="How can I help?"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`${inputClass} resize-y min-h-[120px]`}
            placeholder="Tell me about your project…"
            required
          />
        </div>
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className="btn-shine relative w-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:from-blue-500 hover:to-indigo-500 disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
        >
          {isSubmitting ? "Sending…" : "Send message"}
        </motion.button>
      </form>
    </div>
  );
}
