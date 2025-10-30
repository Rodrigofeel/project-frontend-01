import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue, Fredoka } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
   weight: "400",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
   weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roots",
  description: "this is my portifolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${geistSans.variable} ${geistMono.variable} ${bebas.variable} ${fredoka.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
