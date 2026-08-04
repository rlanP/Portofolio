import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MyPortofolio - Portofolio Dinamis",
  description: "Website Portofolio Siswa kelas XII RPL 1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`min-h-screen flex flex-col bg-gray-950 text-gray-300 ${inter.className}`}
      >
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <footer />
      </body>
    </html>
  );
}
