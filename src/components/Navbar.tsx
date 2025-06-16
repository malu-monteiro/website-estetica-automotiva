import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export function Navbar() {
  return (
    <header className="py-4 sticky top-0 bg-black z-50">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16 xl:px-24">
        <nav className="flex items-center justify-between">
          <Link href="#inicio" className="flex items-center gap-2">
            <ShieldCheck className="h-8 w-8 text-white" />
            <span className="text-xl font-bold text-white">MSS_STUDIO CAR</span>
          </Link>

          <ul className="hidden items-center gap-6 md:flex">
            <li>
              <Link
                href="#inicio"
                className="text-sm font-medium text-gray-300 transition-colors hover:text-red-500"
              >
                Início
              </Link>
            </li>

            <li>
              <Link
                href="#sobre-nos"
                className="text-sm font-medium text-gray-300 transition-colors hover:text-red-500"
              >
                Sobre Nós
              </Link>
            </li>

            <li>
              <Link
                href="#servicos"
                className="text-sm font-medium text-gray-300 transition-colors hover:text-red-500"
              >
                Serviços
              </Link>
            </li>

            <li>
              <Link
                href="#curso"
                className="text-sm font-medium text-gray-300 transition-colors hover:text-red-500"
              >
                Curso
              </Link>
            </li>

            <li>
              <Link
                href="#avaliacoes"
                className="text-sm font-medium text-gray-300 transition-colors hover:text-red-500"
              >
                Avaliações
              </Link>
            </li>

            <li>
              <Link
                href="#contato"
                className="text-sm font-medium text-gray-300 transition-colors hover:text-red-500"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
