import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";

import "./globals.css";

/** Must match `lib/theme.ts` — resolves stored choice or system preference. */
const themeInitScript = `(function(){try{var k="selected-theme",s=localStorage.getItem(k),d=s==="dark"||(s!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d);}catch(e){}})();`;

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ahmer.vercel.app";

export const metadata: Metadata = {
  title: "Ahmer Ali — Full Stack Developer",
  description:
    "Ahmer is currently a third year undergrad from Pakistan. He is enthusiastic about web development and Open-Source.",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/assets/img/favicon.ico",
    shortcut: "/assets/img/pfp-with-bg.jpg",
  },
  openGraph: {
    title: "Ahmer Ali",
    description:
      "Ahmer is currently a third year undergrad from Pakistan. He is enthusiastic about web development and Open-Source.",
    url: siteUrl,
    images: [{ url: "/assets/img/pfp-with-bg.jpg" }],
  },
  twitter: {
    card: "summary",
    title: "Ahmer Ali",
    images: ["/assets/img/pfp-with-bg.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable} suppressHydrationWarning>
      <head>
        {/* Inline theme script avoids next/script beforeInteractive webpack chunk bugs */}
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        />
      </head>
      <body
        className={`${plusJakarta.className} min-h-screen overflow-x-hidden bg-zinc-50 font-sans text-zinc-900 antialiased selection:bg-blue-500/20 dark:bg-zinc-950 dark:text-zinc-100`}
      >
        <Script
          src="https://kit.fontawesome.com/4bf48f78b4.js"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
