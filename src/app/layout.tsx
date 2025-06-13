import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Link Sanitizer",
  description: "Sanitize links from trackers",
  keywords: ["link", "sanitizer", "clean URLs", "privacy", "Instagram link cleaner", "clean instagram links"],
  authors: [{ name: "Askari", url: "https://askaririzvi.site/" }],
  openGraph: {
    title: "Link Sanitizer",
    description: "Sanitize links from trackers like Instagram, Facebook shares, etc.",
    url: "https://link-sanitizer-five.vercel.app/",
    siteName: "Link Sanitizer",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Link Sanitizer",
    description: "Sanitize links from trackers like Instagram, Facebook shares, etc.",
    creator: "@yourhandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  themeColor: "#ffffff",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
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
        <Toaster/>
      </body>
    </html>
  );
}
