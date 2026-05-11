import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Monday Advertising — Verified Ad Accounts & Instant Top-Ups",
  description:
    "Buy verified Meta and Google Ads agency accounts with unlimited spend and instant top-ups via crypto or wire. Scale your campaigns without bans.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-ink-900 text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
