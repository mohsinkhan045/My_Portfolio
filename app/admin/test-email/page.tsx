"use client";
import { useState } from "react";

export default function TestEmailPage() {
  const [isTesting, setIsTesting] = useState(false);
  const [result, setResult] = useState<any>(null);

  const testEmail = async () => {
    setIsTesting(true);
    setResult(null);

    try {
      const response = await fetch('/api/test-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({
        success: false,
        message: 'Failed to test email',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Email Configuration Test
        </h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Test Email Setup
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This will send a test email to verify your email configuration is working correctly.
          </p>

          <button
            onClick={testEmail}
            disabled={isTesting}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isTesting ? "Testing..." : "Send Test Email"}
          </button>
        </div>

        {result && (
          <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${
            result.success ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500'
          }`}>
            <h3 className={`text-lg font-semibold mb-4 ${
              result.success ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
            }`}>
              {result.success ? "✅ Success" : "❌ Error"}
            </h3>
            
            <p className="text-gray-900 dark:text-white mb-4">
              {result.message}
            </p>

            {result.instructions && (
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Setup Instructions:
                </h4>
                <ol className="list-decimal list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  {result.instructions.map((instruction: string, index: number) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ol>
              </div>
            )}

            {result.error && (
              <div className="mb-4">
                <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">
                  Error Details:
                </h4>
                <p className="text-red-600 dark:text-red-400 text-sm">
                  {result.error}
                </p>
              </div>
            )}

            {result.messageId && (
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Message ID:
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-mono">
                  {result.messageId}
                </p>
              </div>
            )}
          </div>
        )}

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mt-6">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
            📧 Email Setup Guide
          </h3>
          
          <div className="space-y-4 text-blue-800 dark:text-blue-200">
            <div>
              <h4 className="font-semibold">Step 1: Create Environment File</h4>
              <p className="text-sm">Create a file named <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">.env.local</code> in your project root with:</p>
              <pre className="bg-blue-100 dark:bg-blue-800 p-2 rounded text-xs mt-2 overflow-x-auto">
{`EMAIL_SERVICE=gmail
EMAIL_USER=ms0547884@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_RECIPIENT=ms0547884@gmail.com`}
              </pre>
            </div>

            <div>
              <h4 className="font-semibold">Step 2: Get Gmail App Password</h4>
              <ol className="list-decimal list-inside text-sm space-y-1">
                <li>Go to <a href="https://myaccount.google.com/security" target="_blank" rel="noopener noreferrer" className="underline">Google Account Security</a></li>
                <li>Enable 2-Step Verification if not already enabled</li>
                <li>Go to "App passwords" under "Signing in to Google"</li>
                <li>Select "Mail" as the app</li>
                <li>Click "Generate"</li>
                <li>Copy the 16-character password (no spaces)</li>
                <li>Replace <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">your_gmail_app_password</code> in .env.local</li>
              </ol>
            </div>

            <div>
              <h4 className="font-semibold">Step 3: Restart Server</h4>
              <p className="text-sm">After creating the .env.local file, restart your development server:</p>
              <pre className="bg-blue-100 dark:bg-blue-800 p-2 rounded text-xs mt-2">
npm run dev
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 