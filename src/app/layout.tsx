import type { Metadata } from "next";

import { Saira, Syne } from "next/font/google";

import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { FloatingWhatsapp } from "@/components/ui/floating-whatsapp";

const sairaSans = Saira({
  variable: "--font-saira-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MSS_STUDIO CAR | Estética Automotiva em Pinhais",
  description:
    "Especialista em estética automotiva em Pinhais. Polimento, revitalização de farol, vitrificação de pintura, higienização interna premium e curso de polimento de faróis.",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.mssstudiocar.com.br/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${sairaSans.variable}  ${syne.variable} antialiased bg-black text-white`}
      >
        <Navbar />

        <main>{children}</main>

        <FloatingWhatsapp />
        <Footer />
      </body>
    </html>
  );
}
