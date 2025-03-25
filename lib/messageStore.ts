// Shared message store for the application
import 'server-only';

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: Date;
}

// Simple in-memory store for messages
// In a production app, this would be replaced with a database
const messageStore: ContactMessage[] = [];

// Helper to add a message to the store
export function addMessage(message: Omit<ContactMessage, 'id' | 'date'>): string {
  const id = Date.now().toString();
  messageStore.push({
    ...message,
    id,
    date: new Date()
  });
  
  // Log for debugging
  console.log(`Message added with ID: ${id}`);
  
  return id;
}

// Helper to get all messages
export function getMessages(): ContactMessage[] {
  return [...messageStore]; // Return a copy to prevent direct mutation
} 