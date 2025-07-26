import type { Metadata } from "next";
import { Kodchasan, Mina, Share } from "next/font/google";
import "./globals.css";

const kodchasan = Kodchasan({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-kodchasan",
});

const mina = Mina({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mina",
});

const share = Share({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-share",
});

export const metadata: Metadata = {
  title: "Sonarix Studio - Indie Game Developer",
  description:
    "We develop indie games with creative gameplay and immersive stories. Discover our latest releases and upcoming projects.",
  keywords: [
    "indie games",
    "game development",
    "creative gameplay",
    "game studio",
    "video games",
    "gaming",
  ],
  authors: [{ name: "Sonarix Studio" }],
  creator: "Sonarix Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sonarix-studio.com",
    title: "Sonarix Studio - Indie Game Developer",
    description:
      "We develop indie games with creative gameplay and immersive stories.",
    siteName: "Sonarix Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonarix Studio - Indie Game Developer",
    description:
      "We develop indie games with creative gameplay and immersive stories.",
    creator: "@sonarixstudio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token_here",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "msapplication-TileColor": "#5be592",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kodchasan.variable} ${mina.variable} ${share.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
