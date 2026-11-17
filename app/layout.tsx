import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "rdisol | Resource Data Integration Solutions",
  description: "Agencia de desarrollo especializada en productos digitales escalables, arquitectura cloud y experiencias inmersivas de alto rendimiento.",
  keywords: ["desarrollo de software", "software factory", "desarrollo web", "apps nativas", "cloud computing", "rdisol", "Next.js"],
  authors: [{ name: "rdisol Team" }],
  creator: "rdisol",
  publisher: "rdisol",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "rdisol | Ingeniería de Software para el Futuro",
    description: "Transformamos la complejidad en soluciones. Construimos ecosistemas digitales robustos, escalables y seguros.",
    url: "https://www.rdisol.com",
    siteName: "rdisol",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "rdisol | Resource Data Integration Solutions",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "rdisol | Resource Data Integration Solutions",
    description: "Agencia de desarrollo especializada en productos digitales escalables y arquitectura cloud.",
    images: ["/images/og-image.jpg"], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="es" 
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 relative overflow-x-hidden selection:bg-sky-500 selection:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}