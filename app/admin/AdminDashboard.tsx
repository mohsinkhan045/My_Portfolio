"use client";

import { useState, useTransition } from "react";
import { sendTestEmailAction } from "./actions";

export type SerializedMessage = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
};

export default function AdminDashboard({
  initialMessages,
}: {
  initialMessages: SerializedMessage[];
}) {
  const [testEmailStatus, setTestEmailStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [testEmailMessage, setTestEmailMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  const sendTestEmail = () => {
    setTestEmailStatus("sending");
    setTestEmailMessage("Sending test email...");
    startTransition(async () => {
      const result = await sendTestEmailAction();
      if (result.ok) {
        setTestEmailStatus("success");
        setTestEmailMessage(result.message);
      } else {
        setTestEmailStatus("error");
        setTestEmailMessage(result.message);
      }
    });
  };

  const sending = isPending || testEmailStatus === "sending";

  return (
    <div className="relative">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Admin Dashboard
          </h1>
          <p className="mb-8 text-slate-600 dark:text-slate-400">
            Contact form submissions (in-memory; resets when the server restarts
            or on serverless cold starts).
          </p>

          <div className="glass-panel mb-6 rounded-2xl p-4 text-sm text-blue-900 dark:text-blue-100">
            <p className="font-semibold">Email configuration</p>
            <ul className="mt-1.5 list-inside list-disc">
              <li>
                Set <code className="rounded bg-white/50 px-1 dark:bg-slate-800">EMAIL_USER</code>,{" "}
                <code className="rounded bg-white/50 px-1 dark:bg-slate-800">EMAIL_PASS</code>,{" "}
                <code className="rounded bg-white/50 px-1 dark:bg-slate-800">EMAIL_RECIPIENT</code> in
                production environment.
              </li>
              <li>Gmail: use an App Password, not your normal password.</li>
            </ul>
            <div className="mt-4">
              <button
                type="button"
                onClick={sendTestEmail}
                disabled={sending}
                className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition hover:from-blue-500 hover:to-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {sending ? "Sending…" : "Send test email"}
              </button>

              {testEmailStatus === "success" && (
                <div className="mt-2 rounded-lg bg-green-50 p-2 text-sm text-green-800 dark:bg-gray-700 dark:text-green-400">
                  {testEmailMessage}
                </div>
              )}

              {testEmailStatus === "error" && (
                <div className="mt-2 rounded-lg bg-red-50 p-2 text-sm text-red-800 dark:bg-gray-700 dark:text-red-400">
                  {testEmailMessage}
                </div>
              )}
            </div>
          </div>

          {initialMessages.length === 0 ? (
            <div className="mb-4 rounded-lg bg-gray-50 p-4 text-sm text-gray-800 dark:bg-gray-800 dark:text-gray-400">
              No messages yet. Submissions from the contact form will appear
              here during this server instance.
            </div>
          ) : (
            <div className="space-y-6">
              {initialMessages.map((message) => (
                <div
                  key={message.id}
                  className="card-elevated rounded-2xl border border-slate-200/80 p-6 dark:border-slate-700/80"
                >
                  <div className="mb-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
                      {message.subject}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(message.date).toLocaleString()}
                    </span>
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">
                      From:
                    </span>{" "}
                    <span className="text-gray-600 dark:text-gray-400">
                      {message.name} ({message.email})
                    </span>
                  </div>
                  <div className="rounded bg-white p-4 dark:bg-gray-700">
                    <p className="whitespace-pre-wrap text-gray-700 dark:text-gray-300">
                      {message.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
