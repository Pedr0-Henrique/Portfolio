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
  title: "Pedro Henrique — Full Stack Developer",
  description:
    "Portfolio of Pedro Henrique, a Full Stack Developer focused on modern web applications, React, Next.js, Laravel, PHP, Java and Spring Boot.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  openGraph: {
    title: "Pedro Henrique — Full Stack Developer",
    description:
      "Portfolio of Pedro Henrique, a Full Stack Developer focused on modern web applications, React, Next.js, Laravel, PHP, Java and Spring Boot.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
