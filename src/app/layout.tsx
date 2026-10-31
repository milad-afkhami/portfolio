import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { baseUrl } from "@/configs/general";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const siteFont = localFont({ src: "./about/fonts/Figtree.ttf", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Milad Afkhami - Senior Full Stack Developer",
  description:
    "Senior Full Stack Developer with 7+ years of experience, specializing in web development using JavaScript, TypeScript, React, Next.js, Node.js, and Micro Frontends.",
  openGraph: {
    url: baseUrl,
    locale: "en_US",
    type: "website",
    siteName: "Milad Afkhami's Portfolio",
    title: "Milad Afkhami - Senior Full Stack Developer",
    images: [{ url: "/images/logo-sm.jpg", alt: "Milad Afkhami", width: 192, height: 192, type: "image/jpeg" }],
    description:
      "Senior Full Stack Developer with 7+ years of experience, specializing in web development using JavaScript, TypeScript, React, Next.js, Node.js, and Micro Frontends.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body className={`${siteFont.className} min-h-screen bg-base-100`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <main id="main-content" tabIndex={-1} className="container flex-1 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
