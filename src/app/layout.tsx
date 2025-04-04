import "./globals.css";
import type { Metadata } from "next";
import { baseUrl } from "@/configs/general";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Milad Afkhami - Senior Frontend Developer",
  description:
    "Senior Frontend Developer with 7+ years of experience, specializing in web development using JavaScript, TypeScript, React, Next.js, and Micro Frontends.",
  openGraph: {
    url: baseUrl,
    locale: "en_US",
    type: "website",
    siteName: "Milad Afkhami's Portfolio",
    title: "Milad Afkhami - Senior Frontend Developer",
    images: [{ url: "/images/logo-sm.jpg", alt: "Milad Afkhami", width: 192, height: 192, type: "image/jpeg" }],
    description:
      "Senior Frontend Developer with 7+ years of experience, specializing in web development using JavaScript, TypeScript, React, Next.js, and Micro Frontends.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body className="min-h-screen bg-base-100 font-sans">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="container flex-1 py-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
