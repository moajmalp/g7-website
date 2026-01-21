import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { FramerProvider } from "@/components/providers/framer-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "G7 Holdings | Algorithmic Trading & Fintech Excellence",
  description: "G7 Holdings provides data-driven algorithmic trading systems designed for steady growth. Experience disciplined fintech solutions for a second source of income.",
  keywords: ["algorithmic trading", "fintech", "passive income", "data-driven trading", "G7 Holdings", "wealth management"],
  authors: [{ name: "G7 Holdings" }],
  openGraph: {
    title: "G7 Holdings | Algorithmic Trading Excellence",
    description: "Build a second source of income with our data-driven algorithmic systems. Disciplined, risk-aware, and automated.",
    url: "https://g7holdings.com",
    siteName: "G7 Holdings",
    images: [
      {
        url: "/og-image.png", // User would need to provide or I can generate a placeholder mention
        width: 1200,
        height: 630,
        alt: "G7 Holdings - Scalable Algorithmic Trading",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "G7 Holdings | Fintech Excellence",
    description: "Data-driven algorithmic trading for steady growth.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ scrollBehavior: 'smooth' }}>
      <body
        className={`${inter.variable} ${outfit.variable} font-inter antialiased bg-[#183113] text-[#f1e8cb]`}
      >
        <FramerProvider>
          {children}
        </FramerProvider>
      </body>
    </html>
  );
}
