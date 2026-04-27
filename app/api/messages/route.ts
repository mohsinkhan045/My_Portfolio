import { NextResponse } from "next/server";

/**
 * Public GET removed for security. Messages are read server-side in
 * `app/admin/page.tsx` via `getMessages()`.
 */
export async function GET() {
  return NextResponse.json(
    { message: "Not available. Use the admin dashboard on the same deployment." },
    { status: 404 }
  );
}
