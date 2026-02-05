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
  title: "Yudi Muchtar PK Siregar | AI & IoT Engineer",
  description: "Portofolio resmi Yudi Muchtar PK Siregar, S.T., S.Kom. Ahli solusi AIoT (Smart Home, City, Farming) dan Produser Musik AI berbasis di Padangsidimpuan, Sumatera Utara, Indonesia.",
  keywords: ["Yudi Muchtar PK Siregar", "AI & IoT Expert Indonesia", "Smart City Consultant", "Smart Farming Padangsidimpuan", "AI Music Producer Indonesia", "Smart Home Solutions", "Solusi AIoT"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} ${orbitron.variable} font-mono antialiased`}>
        {children}
      </body>
    </html>
  );
}
