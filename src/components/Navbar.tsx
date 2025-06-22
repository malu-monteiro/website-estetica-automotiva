"use client";

import Link from "next/link";

import { useState, useEffect, useRef } from "react";

import { ShieldCheck, Menu, X } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#servicos", label: "Serviços" },
  { href: "#curso", label: "Curso" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#contato", label: "Contato" },
];

const SCROLL_THRESHOLD = 50;
const linkBaseClass = "font-medium transition-colors hover:text-red-500";
const desktopLinkClass = `text-sm text-gray-300 ${linkBaseClass}`;
const mobileLinkClass = `text-lg text-white ${linkBaseClass}`;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      if (isScrollingDown && currentScrollY > SCROLL_THRESHOLD) {
        setIsOpen(false);
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar, { passive: true });
    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-lg border-b border-white/10 bg-gradient-to-b from-transparent to-black/75 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16 xl:px-24">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-2">
            <ShieldCheck className="h-8 w-8 text-white" />
            <span className="text-xl font-bold text-white">MSS_STUDIO CAR</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 ">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={desktopLinkClass}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            className="md:hidden relative z-50"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-white hover:text-red-500" />
            ) : (
              <Menu className="h-6 w-6 text-white hover:text-red-500" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-black/80 backdrop-blur-lg"
          >
            <nav className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={mobileLinkClass}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
