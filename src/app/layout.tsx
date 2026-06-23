import type { Metadata } from "next";
import { Space_Grotesk, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import StructuredData from "@/components/StructuredData";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.firmName} | Remote-First Accounting, Tax & Advisory`,
    template: `%s | ${site.firmName}`,
  },
  description: site.metaDescription,
  keywords: [
    "remote bookkeeping services",
    "online accounting firm",
    "accounting automation",
    "outsourced bookkeeping",
    "small business accountant",
    "tax preparation",
    "fractional CFO",
    "QuickBooks bookkeeping",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.firmName} | Modern Remote-First Accounting Firm`,
    description: site.metaDescription,
    url: site.url,
    siteName: site.firmName,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.firmName} | Modern Remote-First Accounting Firm`,
    description: site.metaDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
