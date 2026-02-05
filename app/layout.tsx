import type { Metadata } from "next";
import { Space_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Jasa Pembuat Sistem Solusi Berbasis Ai dan IoT | Yudi Muchtar PK Siregar",
  description: "Mobile Developer Android dan IOS, Software Developer untuk Windows/Linux/Mac. Solusi Smart Home, Smart City, & Smart Farming terpercaya dengan standar global.",
  keywords: [
    "Jasa Pembuat Sistem Solusi Berbasis Ai dan IoT",
    "Mobile Developer Android dan IOS",
    "Software Developer untuk Windows/Linux/Mac",
    "Jasa IoT Indonesia",
    "Konsultan Smart Home",
    "Smart Farming Padangsidimpuan",
    "Yudi Muchtar PK Siregar"
  ],
  openGraph: {
    title: "Jasa Pembuat Sistem Solusi Berbasis Ai dan IoT | Yudi Muchtar PK Siregar",
    description: "Mobile Developer Android dan IOS, Software Developer untuk Windows/Linux/Mac. Solusi Smart Home, Smart City, & Smart Farming terpercaya.",
    url: "https://yudimuchtarpksiregar.com",
    siteName: "Yudi Muchtar Portfolio",
    images: [
      {
        url: "/sequence/frame_060.png", // Using a representative frame as OG image
        width: 1200,
        height: 630,
        alt: "Yudi Muchtar - AI & IoT Engineer",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Yudi Muchtar PK Siregar",
    "image": "https://yudimuchtarpksiregar.com/sequence/frame_060.png",
    "url": "https://yudimuchtarpksiregar.com",
    "telephone": "+6281396084064",
    "email": "yudimuchtarpksiregar@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Padangsidimpuan",
      "addressRegion": "Sumatera Utara",
      "addressCountry": "ID"
    },
    "description": "Jasa Pembuat Sistem Solusi Berbasis Ai dan IoT, Mobile Developer, dan Software Developer Professional.",
    "priceRange": "$$$"
  };

  return (
    <html lang="en">
      <body className={`${spaceMono.variable} ${orbitron.variable} font-mono antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
