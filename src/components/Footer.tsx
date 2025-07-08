import React from "react";

import Link from "next/link";

import Image from "next/image";

import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  subDescription?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  developerCredit?: string;
  developerCreditLink?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const DEFAULT_CONFIG = {
  logo: {
    url: "/",
    src: "/logo.png",
    alt: "Logo MSS STUDIO CAR",
    title: "MSS STUDIO CAR",
  },
  sections: [
    {
      title: "Empresa",
      links: [
        { name: "Início", href: "/" },
        { name: "Sobre nós", href: "/sobre" },
        { name: "Serviços", href: "/servicos" },
        { name: "Entre em Contato", href: "/curso" },
      ],
    },
    {
      title: "Serviços",
      links: [
        { name: "Polimento", href: "/servicos/polimento" },
        { name: "Revitalização de Farol", href: "/revitalizacao-de-farol" },
        { name: "Vitrificação de Pintura", href: "/vitrificacao-de-pintura" },
        {
          name: "Higienização Interna Premium",
          href: "/higienizacao-interna-premium",
        },
      ],
    },
  ],
  socialLinks: [
    { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
    { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
    { icon: <FaYoutube className="size-5" />, href: "#", label: "YouTube" },
    { icon: <FaTiktok className="size-5" />, href: "#", label: "TikTok" },
    { icon: <FaGoogle className="size-5" />, href: "#", label: "Google" },
  ],
  legalLinks: [
    { name: "Termos e Condições", href: "/termos" },
    { name: "Política de Privacidade", href: "/politica" },
  ],
  description:
    "Especialistas em estética automotiva. Cuidamos de cada detalhe para entregar qualidade, brilho e proteção ao seu veículo.",
  subDescription: "Atendimento com horário agendado — Seg a Sáb, 08h às 18h",
  copyright: "© 2025 MSS STUDIO CAR. Todos os direitos reservados.",
  developerCredit: "Desenvolvido por Maria Luiza",
  developerCreditLink: "https://github.com/malu-monteiro",
};

export function Footer({
  logo = DEFAULT_CONFIG.logo,
  sections = DEFAULT_CONFIG.sections,
  description = DEFAULT_CONFIG.description,
  subDescription = DEFAULT_CONFIG.subDescription,
  socialLinks = DEFAULT_CONFIG.socialLinks,
  copyright = DEFAULT_CONFIG.copyright,
  developerCredit = DEFAULT_CONFIG.developerCredit,
  developerCreditLink = DEFAULT_CONFIG.developerCreditLink,
  legalLinks = DEFAULT_CONFIG.legalLinks,
}: FooterProps) {
  return (
    <footer className="container-layout py-32 ">
      <div className="flex w-full flex-col gap-10 lg:flex-row lg:justify-between lg:items-start">
        {/* Logo and description */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Link href={logo.url} className="flex items-center gap-2">
              <Image
                src={logo.src}
                alt={logo.alt}
                title={logo.title}
                width={80}
                height={80}
                priority
              />
              <h2 className="text-xl font-semibold">{logo.title}</h2>
            </Link>
          </div>

          <p className="max-w-[70%] text-sm text-muted-foreground">
            {description}
          </p>

          <p className="text-sm text-muted-foreground">{subDescription}</p>

          {/* Social Links */}
          <ul className="flex items-center space-x-6 text-muted-foreground">
            {socialLinks.map((social, idx) => (
              <li
                key={`social-${idx}`}
                className="font-medium hover:text-red-800 transition-colors"
              >
                <Link href={social.href} aria-label={social.label}>
                  {social.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Links sections */}
        <nav className="grid gap-6 md:grid-cols-2 lg:gap-20">
          {sections.map((section, sectionIdx) => (
            <div key={`section-${sectionIdx}`}>
              <h3 className="mb-4 font-bold">{section.title}</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {section.links.map((link, linkIdx) => (
                  <li
                    key={`${sectionIdx}-${linkIdx}`}
                    className="font-medium hover:text-red-800 transition-colors"
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Footer bottom */}
      <div className="mt-8 flex flex-col-reverse gap-4 border-t pt-8 text-xs font-medium text-muted-foreground md:flex-row md:justify-between md:items-center">
        <p className="order-2 lg:order-1">{copyright}</p>

        {/* Developer Credit */}
        <p className="order-3 text-muted-foreground/80 md:order-2">
          {developerCreditLink ? (
            <Link
              href={developerCreditLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-800 transition-colors"
            >
              {developerCredit}
            </Link>
          ) : (
            developerCredit
          )}
        </p>

        {/* Legal Links */}
        <ul className="order-1 flex flex-col gap-2 md:order-3 md:flex-row">
          {legalLinks.map((link, idx) => (
            <li
              key={`legal-${idx}`}
              className="hover:text-red-800 transition-colors"
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
