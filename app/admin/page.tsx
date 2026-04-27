import AdminDashboard, { SerializedMessage } from "./AdminDashboard";
import { getMessages } from "@/lib/messageStore";

export default function AdminPage() {
  const raw = getMessages();
  const initialMessages: SerializedMessage[] = raw.map((m) => ({
    id: m.id,
    name: m.name,
    email: m.email,
    subject: m.subject,
    message: m.message,
    date: m.date.toISOString(),
  }));

  return <AdminDashboard initialMessages={initialMessages} />;
}
