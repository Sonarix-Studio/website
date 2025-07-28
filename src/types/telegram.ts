// Type definitions for Telegram API integration

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}

export interface TelegramAPIResponse {
  success: boolean;
  message: string;
  telegramResponse?: {
    ok: boolean;
    result?: {
      message_id: number;
      date: number;
      text: string;
    };
  };
  error?: string;
}

export interface TelegramMessage {
  chat_id: string;
  text: string;
  parse_mode?: "HTML" | "Markdown";
}

export interface SubmitStatus {
  type: "success" | "error" | null;
  message: string;
}
