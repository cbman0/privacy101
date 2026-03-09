import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Privacy 101 - Take Back Your Life",
  description: "An interactive presentation about privacy, surveillance, and digital freedom. Learn how to protect your data and reclaim your digital life.",
  keywords: ["privacy", "security", "bitcoin", "grapheneos", "protonmail", "signal", "surveillance"],
  authors: [{ name: "Privacy 101" }],
  openGraph: {
    title: "Privacy 101 - Take Back Your Life",
    description: "An interactive presentation about privacy, surveillance, and digital freedom.",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
