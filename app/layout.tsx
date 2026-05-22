import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://rhythm-within.com"
  ),
  title: "Rhythm Within — Find your rhythm again.",
  description:
    "A 3-week online course for athletes and perfectionists who are done fighting their body. Yoga, meditation, and neuroscience — fully self-paced.",
  openGraph: {
    title: "Rhythm Within — Find your rhythm again.",
    description:
      "A 3-week online course for athletes and perfectionists who are done fighting their body.",
    url: "https://rhythm-within.com",
    siteName: "Rhythm Within",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
