import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Danni Bookkeeping | Expert Virtual Bookkeeping for NZ Small Businesses",
  description: "Danni Bookkeeping offers expert virtual bookkeeping services for small businesses across New Zealand. Based in Tauranga, Xero Certified.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Danni Bookkeeping | Expert Virtual Bookkeeping for NZ Small Businesses",
    description: "Based in Tauranga, serving all of New Zealand. Xero Certified Advisor. I handle the numbers so you can focus on your business.",
    url: "https://www.dannibookkeeping.co.nz",
    siteName: "Danni Bookkeeping",
    images: [
      {
        url: "https://www.dannibookkeeping.co.nz/danni-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Danni Wang – Expert Virtual Bookkeeping for NZ Small Businesses",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danni Bookkeeping | Expert Virtual Bookkeeping for NZ Small Businesses",
    description: "Based in Tauranga, serving all of New Zealand. Xero Certified Advisor.",
    images: ["https://www.dannibookkeeping.co.nz/danni-profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans text-slate-900`}
      >
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
        <Analytics />
        <GoogleAnalytics gaId="G-MQX5L18HX3" />
      </body>
    </html>
  );
}
