import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Sonarix Studio",
  description:
    "Invest in the future of AI-integrated, XR-powered game development.",
  keywords: [
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
    url: "https://sonarix.studio",
    title: "Sonarix Studio",
    description:
      "Invest in the future of AI-integrated, XR-powered game development..",
    siteName: "Sonarix Studio",
    images: [
      {
        url: "/images/banner/Banner1.png",
        width: 1200,
        height: 630,
        alt: "Sonarix Studio - AI-integrated, XR-powered game development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonarix Studio",
    description:
      "Invest in the future of AI-integrated, XR-powered game development.",
    creator: "@sonarixstudio",
    images: ["/images/banner/Banner1.png"],
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <div className="gaming-layout">{children}</div>
      </body>
    </html>
  );
}
