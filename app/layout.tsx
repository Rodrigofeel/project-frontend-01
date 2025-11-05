import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue, Fredoka, Saira_Condensed, Montserrat, Inter, Raleway, Lora, Abril_Fatface, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const garamond = Cormorant_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: "600"
});

const abril = Abril_Fatface({
  variable: "--font-abril",
  subsets: ["latin"],
  weight: "400"
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-relaway",
  weight: "800",
  subsets: ["latin"],
});

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

const saira = Saira_Condensed({
  variable: "--font-saira",
   weight: "800",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: "800",
  subsets: ["latin"],
})

const inter = Inter({
  variable: "--font-inter",
  weight: "800",
  subsets: ["latin"],
})

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
        className={` ${geistSans.variable} ${geistMono.variable} ${bebas.variable} ${fredoka.variable} ${saira.variable} ${inter.variable} ${montserrat.variable} ${raleway.variable} ${lora.variable} ${abril.variable} ${garamond.variable}antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
