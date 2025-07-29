import { NextRequest, NextResponse } from "next/server";
import type { ContactFormData } from "../../../types/telegram";

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json();

    // Validate required fields
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Telegram bot configuration
    const TELEGRAM_BOT_TOKEN =
      process.env.TELEGRAM_BOT_TOKEN ||
      "8024288405:AAEKXKm87mjvMc5OlABzqcfJ-PUbGQsIIMo";
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || "-4938596074";

    // Format the message
    const telegramMessage = `
🔔 New Contact Us Submission

👤 Contact Information:
• First Name: ${formData.firstName}
• Last Name: ${formData.lastName}
• Email: ${formData.email}
• Company: ${formData.company || "Not specified"}

📋 Project Details:
• Project Type: ${formData.projectType || "Not specified"}
• Budget: ${formData.budget || "Not specified"}

💬 Message:
${formData.message}

📅 Submitted: ${new Date().toLocaleString()}
    `.trim();

    // Send to Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: telegramMessage,
          parse_mode: "HTML",
        }),
      }
    );

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json();
      console.error("Telegram API error:", errorData);
      return NextResponse.json(
        { error: "Failed to send message to Telegram" },
        { status: 500 }
      );
    }

    const telegramData = await telegramResponse.json();

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
      telegramResponse: telegramData,
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
