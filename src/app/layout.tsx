import type { Metadata } from "next";
import { Kalam } from "next/font/google";
import "./globals.css";

const kalam = Kalam({ 
  weight: ['300', '400', '700'],
  subsets: ["devanagari", "latin"],
  variable: "--font-kalam"
});

import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Aaj Ka Sankalp",
  description: "Pick your daily resolution for a better life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className={`${kalam.variable} antialiased h-full`}>
      <body className="min-h-full flex flex-col bg-slate-50">
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
