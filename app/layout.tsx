import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Study in Germany with Low Fees | PR in 3 Years | Abroad Scholar",

  description:
    "Study in Germany with low tuition fees and secure PR pathways in just 3 years. Get free university shortlisting, visa support, APS guidance & German language training.",

  keywords: [
    "study in Germany",
    "Germany education consultants India",
    "Germany PR after study",
    "low tuition universities in Germany",
    "Germany student visa",
    "APS certification Germany",
    "German language training",
    "study in Germany from India",
    "public universities in Germany",
  ],

  icons: {
    icon: "/favicon.svg",
  },

  openGraph: {
    title: "Study in Germany with Low Fees | PR in 3 Years",
    description:
      "Low tuition public universities, 18-month stay-back visa & PR pathway in 3 years. Free counseling & visa support by Abroad Scholar.",
    url: "https://germany.abroadscholars.in/",
    siteName: "Abroad Scholar",
    type: "website",
    locale: "en_IN",
  },

  robots: {
    index: true,
    follow: true,
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
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
