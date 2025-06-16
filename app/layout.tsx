// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PrimeClone - Stream Movies & TV Shows",
    template: "%s | PrimeClone",
  },
  description:
    "Watch thousands of movies and TV shows with PrimeClone - Your premium streaming destination",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} bg-[#0F171E] text-white antialiased`}>
    <body>
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
