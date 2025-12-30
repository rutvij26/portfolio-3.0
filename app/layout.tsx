import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@/components/Analytics";
import {
  GoogleTagManager,
  GoogleTagManagerNoscript,
} from "@/components/GoogleTagManager";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { StructuredData } from "@/components/StructuredData";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Rutvij Sathe - Software Engineer",
  description:
    "Portfolio of Rutvij Sathe, Software Engineer II at American Express. Full Stack Developer specializing in React.js, Next.js, Node.js, and AdonisJS.",
  keywords: [
    "Rutvij Sathe",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "AdonisJS",
    "American Express",
    "Toronto Software Engineer",
    "Portfolio",
    "Web Developer",
    "Backend Developer",
    "Frontend Developer",
  ],
  authors: [{ name: "Rutvij Sathe" }],
  creator: "Rutvij Sathe",
  publisher: "Rutvij Sathe",
  metadataBase: new URL("https://rutvijsathe.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rutvijsathe.dev",
    siteName: "Rutvij Sathe - Software Engineer",
    title: "Rutvij Sathe - Software Engineer",
    description:
      "Portfolio of Rutvij Sathe, Software Engineer II at American Express",
    images: [
      {
        url: "/api/og?title=Rutvij%20Sathe&description=Software%20Engineer%20II%20%40%20American%20Express",
        width: 1200,
        height: 630,
        alt: "Rutvij Sathe - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rutvij Sathe - Software Engineer",
    description:
      "Portfolio of Rutvij Sathe, Software Engineer II at American Express",
    images: [
      "/api/og?title=Rutvij%20Sathe&description=Software%20Engineer%20II%20%40%20American%20Express",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add verification codes if needed
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://www.google-analytics.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.gstatic.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        {/* <GoogleTagManager /> */}
        <GoogleAnalytics />
        <StructuredData />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${roboto.variable} font-sans antialiased`}>
        <GoogleTagManagerNoscript />
        <ThemeProvider>
          {children}
          <Analytics />
          <VercelAnalytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
