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
  metadataBase: new URL("https://www.mssstudiocar.com.br"),

  title: "MSS_STUDIO CAR | Estética Automotiva em Pinhais",
  description:
    "Especialista em estética automotiva em Pinhais. Polimento, revitalização de farol, vitrificação de pintura, higienização interna premium e curso de polimento de faróis.",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.mssstudiocar.com.br/",
  },

  openGraph: {
    title: "MSS Studio Car | Estética Automotiva Premium em Pinhais",
    description:
      "Transformamos a aparência do seu veículo com polimento, vitrificação e revitalização de faróis. Também oferecemos curso de polimento de faróis para iniciantes e profissionais.",
    url: "https://www.mssstudiocar.com.br/",
    siteName: "MSS Studio Car",
    images: [
      {
        url: "/card.png",
        width: 1200,
        height: 630,
        alt: "MSS Studio Car - Estética Automotiva Premium em Pinhais",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MSS Studio Car | Estética Automotiva Premium",
    description:
      "Polimento, vitrificação e revitalização de faróis em Pinhais. Curso de polimento de faróis para iniciantes e profissionais.",
    images: ["/card.png"],
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
