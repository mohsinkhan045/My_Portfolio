import { NextResponse } from "next/server";

/**
 * Test email is triggered from the admin UI via Server Action (`sendTestEmailAction`).
 * This route is disabled to avoid unauthenticated email sending.
 */
export async function POST() {
  return NextResponse.json(
    { success: false, message: "Use Admin → Send test email (server action)." },
    { status: 404 }
  );
}
