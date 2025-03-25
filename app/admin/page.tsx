"use client";
import { useEffect, useState } from 'react';

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: Date;
}

export default function AdminPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [testEmailStatus, setTestEmailStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [testEmailMessage, setTestEmailMessage] = useState('');

  useEffect(() => {
    async function fetchMessages() {
      try {
        const response = await fetch('/api/messages');
        if (!response.ok) {
          throw new Error('Failed to fetch messages');
        }
        const data = await response.json();
        setMessages(data.messages || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchMessages();
  }, []);

  const sendTestEmail = async () => {
    setTestEmailStatus('sending');
    setTestEmailMessage('Sending test email...');
    
    try {
      const response = await fetch('/api/test-email', {
        method: 'POST',
      });
      
      const data = await response.json();
      console.log('Test email response:', data);
      
      if (response.ok && data.success) {
        setTestEmailStatus('success');
        setTestEmailMessage(`Test email sent successfully! Check your inbox (${data.details?.to || 'ms0547884@gmail.com'}).`);
      } else {
        setTestEmailStatus('error');
        let errorMsg = data.error || data.message || 'Unknown error';
        
        // If there's config info in the response, show it
        if (data.config) {
          errorMsg += `\nUser: ${data.config.user}, Password provided: ${data.config.passwordProvided ? 'Yes' : 'No'}`;
        }
        
        setTestEmailMessage(`Failed to send test email: ${errorMsg}`);
      }
    } catch (error) {
      console.error('Error sending test email:', error);
      setTestEmailStatus('error');
      setTestEmailMessage(`Error: ${error instanceof Error ? error.message : 'Failed to send test email'}`);
    }
    
    // Clear status after 10 seconds if successful, keep error messages longer
    setTimeout(() => {
      if (testEmailStatus === 'success') {
        setTestEmailStatus('idle');
        setTestEmailMessage('');
      }
    }, 10000);
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-screen-lg mx-auto">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white">
            Admin Dashboard
          </h1>
          <p className="mb-8 font-light text-gray-500 dark:text-gray-400">
            View and manage contact form submissions
          </p>
          
          <div className="p-4 mb-6 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400">
            <p className="font-medium">Email Configuration Reminder</p>
            <ul className="mt-1.5 list-disc list-inside">
              <li>Messages are stored here temporarily but will be lost when the server restarts</li>
              <li>To receive emails at ms0547884@gmail.com, update the EMAIL_PASS in .env.local</li>
              <li>For Gmail accounts with 2FA, generate an app password in your Google Account settings</li>
            </ul>
            <div className="mt-4">
              <button 
                onClick={sendTestEmail}
                disabled={testEmailStatus === 'sending'}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {testEmailStatus === 'sending' ? 'Sending...' : 'Send Test Email'}
              </button>
              
              {testEmailStatus === 'success' && (
                <div className="mt-2 p-2 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-700 dark:text-green-400">
                  {testEmailMessage}
                </div>
              )}
              
              {testEmailStatus === 'error' && (
                <div className="mt-2 p-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-700 dark:text-red-400">
                  {testEmailMessage}
                </div>
              )}
            </div>
          </div>

          {loading ? (
            <div className="text-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
              <p className="mt-2 text-gray-700 dark:text-gray-300">Loading messages...</p>
            </div>
          ) : error ? (
            <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
              <span className="font-medium">Error:</span> {error}
            </div>
          ) : messages.length === 0 ? (
            <div className="p-4 mb-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
              No messages found. When someone submits the contact form, their message will appear here.
            </div>
          ) : (
            <div className="space-y-6">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className="p-6 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {message.subject}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(message.date).toLocaleString()}
                    </span>
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">From:</span>{' '}
                    <span className="text-gray-600 dark:text-gray-400">{message.name} ({message.email})</span>
                  </div>
                  <div className="p-4 bg-white rounded dark:bg-gray-700">
                    <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{message.message}</p>
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