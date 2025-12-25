import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@/components/Analytics";
import { ReCaptchaProvider } from "@/components/ReCaptchaProvider";
import {
  GoogleTagManager,
  GoogleTagManagerNoscript,
} from "@/components/GoogleTagManager";
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
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
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
        url: "/og-image.png",
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
    images: ["/og-image.png"],
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
        <GoogleTagManager />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${roboto.variable} font-sans antialiased`}>
        <GoogleTagManagerNoscript />
        <ThemeProvider>
          <ReCaptchaProvider>
            {children}
            <Analytics />
          </ReCaptchaProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
