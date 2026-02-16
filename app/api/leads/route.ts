import { google } from "googleapis";
import { NextResponse } from "next/server";

// API route to receive lead data and append it to Google Sheets
export async function POST(req: Request) {
  try {
    // Parse request body
    const body = await req.json();

    const submittedAt = new Date().toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    /**
     * Initialize Google Auth using Service Account credentials
     * - Credentials are loaded from environment variables
     * - private_key needs newline replacement because env files store it as one line
     * - Scope allows read/write access to Google Sheets
     */
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    /**
     * Initialize Google Sheets API v4
     */
    const sheets = google.sheets({ version: "v4", auth });

    /**
     * Append a new lead row
     * - Use USER_ENTERED so Google Sheets parses values naturally
     * - Pass Date object (not formatted string) to preserve date behavior
     */
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: "Leads_View!A5",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            body.full_name,
            body.email,
            body.phone,
            body.city,
            body.course,
            body.test_type,
            body.source_form,
            body.page_url,
            submittedAt,
          ],
        ],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("API ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
