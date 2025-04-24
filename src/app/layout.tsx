import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { GoogleAnalytics } from '@next/third-parties/google'
import MobileMenu from "../components/MobileMenu";
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
  title: "Nicolas | AI Engineer",
  description: "Personal blog and portfolio of Nicolas, an AI Engineer from Brazil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  return (
    <html lang="en" className="dark">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-pastel-bg text-pastel-text`}
      >
        <header className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/nl-logo.png" 
              alt="Nicolas' Logo" 
              width={40} 
              height={40} 
              className="h-10 w-auto"
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-6">
            <Link href="/" className="text-pastel-light hover:text-pastel-primary transition-colors">home</Link>
            <Link href="/about" className="text-pastel-light hover:text-pastel-primary transition-colors">about</Link>
            <Link href="https://www.youtube.com/@nicolasleao-tech" target="_blank" className="text-pastel-light hover:text-pastel-primary transition-colors">youtube</Link>
            <Link href="https://cognition.digital" target="_blank" className="text-pastel-light hover:text-pastel-primary transition-colors">community</Link>
          </nav>
          
          {/* Mobile Menu */}
          <MobileMenu />
        </header>
        {children}
      </body>
      {googleAnalyticsId && <GoogleAnalytics gaId={googleAnalyticsId} />}
    </html>
  );
}
