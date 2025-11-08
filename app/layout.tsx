import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { AnimatedGradient } from "@/components/layout/AnimatedGradient";
import { Navigation } from "@/components/layout/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learn to Build with AI",
  description: "Master building websites and apps by describing what you want in plain English. AI writes the code for you—no coding experience needed. Start creating real projects in under an hour.",
  keywords: ["AI coding", "learn to code", "build apps with AI", "no code experience", "AI website builder", "beginner coding tutorial", "vibe coding"],
  authors: [{ name: "Braintied", url: "https://braintied.com" }],
  creator: "Braintied",
  publisher: "Braintied",
  metadataBase: new URL("https://vibecodestart.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Learn to Build with AI",
    description: "Master building websites and apps by describing what you want in plain English. AI writes the code for you—no coding experience needed.",
    url: "https://vibecodestart.com",
    siteName: "Vibe Code",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn to Build with AI",
    description: "Master building websites and apps by describing what you want in plain English. AI writes the code for you—no coding experience needed.",
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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AnimatedGradient />
          <Navigation />
          <main className="relative">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
