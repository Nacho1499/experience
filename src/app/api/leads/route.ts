import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, productTitle, pdf } = await req.json();

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        // On Vercel, the value contains literal \n, so convert them back:
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID!;
    const range = "Leads!A:F";

    const values = [[
      new Date().toISOString(),
      name,
      email,
      phone,
      productTitle || "",
      pdf || ""
    ]];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("Sheets append error:", err?.message || err);
    return NextResponse.json({ ok: false, error: "Failed to save to Google Sheet" }, { status: 500 });
  }
}
