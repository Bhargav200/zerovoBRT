"use server"

import { Resend } from "resend"
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const company = formData.get("company") as string
  const service = formData.get("service") as string
  const message = formData.get("message") as string

  // Validate required fields
  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields." }
  }

  try {
    // 1. Google Sheets Integration
    try {
      if (process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY && process.env.GOOGLE_SHEET_ID) {
        // Initialize auth
        const serviceAccountAuth = new JWT({
          email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
          // Handle newlines formatting in .env files gracefully
          key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
          scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
        await doc.loadInfo(); 
        const sheet = doc.sheetsByIndex[0];
        
        // Append row
        // IMPORTANT: The headers in the Google Sheet MUST match these keys exactly!
        await sheet.addRow({
          Name: name,
          Email: email,
          Company: company || 'N/A',
          Service: service || 'N/A',
          Message: message,
          Date: new Date().toISOString()
        });
      } else {
         console.warn("[v0] Google Sheets integration skipped - missing environment variables.");
      }
    } catch (sheetError) {
      console.error("[v0] Error appending to Google Sheets:", sheetError);
      // Optional: you could return an error here if you want it to fail fully, 
      // but leaving it silent ensures the backup email is still sent.
    }

    // 2. Email Notification
    // Once a domain is verified, you can change this to process.env.CONTACT_EMAIL
    const recipientEmail = "quantumflux.tech01@gmail.com"

    const { data, error } = await resend.emails.send({
      from: "Vagrah AI Contact Form <onboarding@resend.dev>",
      to: recipientEmail, // Using account owner's email for testing mode
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .content {
                background: #f9f9f9;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
                padding: 15px;
                background: white;
                border-radius: 8px;
                border-left: 4px solid #0ea5e9;
              }
              .label {
                font-weight: 600;
                color: #0ea5e9;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 5px;
              }
              .value {
                color: #333;
                font-size: 16px;
              }
              .message-box {
                background: white;
                padding: 20px;
                border-radius: 8px;
                border: 1px solid #e5e5e5;
                white-space: pre-wrap;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e5e5e5;
                color: #666;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">From Vagrah AI Website</p>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #0ea5e9; text-decoration: none;">${email}</a></div>
              </div>
              
              ${
                company
                  ? `
              <div class="field">
                <div class="label">Company</div>
                <div class="value">${company}</div>
              </div>
              `
                  : ""
              }
              
              ${
                service
                  ? `
              <div class="field">
                <div class="label">Service Interested In</div>
                <div class="value">${service}</div>
              </div>
              `
                  : ""
              }
              
              <div class="field">
                <div class="label">Message</div>
                <div class="message-box">${message}</div>
              </div>
              
              <div class="footer">
                <p>You can reply directly to this email to respond to ${name}.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error("[v0] Resend API error:", error)
      if (error.message?.includes("verification") || error.message?.includes("domain")) {
        return {
          success: false,
          error: "Email configuration needed. Please contact support.",
        }
      }
      return { success: false, error: "Failed to send email. Please try again." }
    }

    return { success: true }
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return { success: false, error: "An unexpected error occurred. Please try again." }
  }
}
