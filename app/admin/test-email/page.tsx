"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { sendTestEmailAction } from "../actions";

export default function TestEmailPage() {
  const [result, setResult] = useState<{
    ok: boolean;
    message: string;
  } | null>(null);
  const [isPending, startTransition] = useTransition();

  const testEmail = () => {
    setResult(null);
    startTransition(async () => {
      const r = await sendTestEmailAction();
      setResult({ ok: r.ok, message: r.message });
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-4">
        <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
          <Link href="/admin" className="text-blue-600 hover:underline dark:text-blue-400">
            ← Back to admin
          </Link>
        </p>
        <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
          Email configuration test
        </h1>

        <div className="mb-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Sends a test email using the same server action as the main admin
            dashboard (no public API).
          </p>
          <button
            type="button"
            onClick={testEmail}
            disabled={isPending}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isPending ? "Sending…" : "Send test email"}
          </button>
        </div>

        {result && (
          <div
            className={`rounded-lg border-l-4 bg-white p-6 shadow-md dark:bg-gray-800 ${
              result.ok ? "border-green-500" : "border-red-500"
            }`}
          >
            <h3
              className={`mb-2 text-lg font-semibold ${
                result.ok
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {result.ok ? "Success" : "Error"}
            </h3>
            <p className="text-gray-900 dark:text-white">{result.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
