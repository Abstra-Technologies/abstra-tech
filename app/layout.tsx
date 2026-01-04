import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/navigation/MainNav";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/app/providers/SmoothScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abstra Technologies",
    description: "Abstra Technologies designs and develops modern software solutions that help organizations operate smarter, faster, and more efficiently.",
    manifest: '/manifest.json',
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

      <SmoothScrollProvider>
          <Header />
          {children}
          <Footer />
      </SmoothScrollProvider>

      </body>
    </html>
  );
}
