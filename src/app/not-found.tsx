import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center p-4 pt-20 pb-20 min-h-screen">
      <div className="text-center">
        <Image
          src="/404-error.svg"
          alt="Erro 404 - Página não encontrada"
          width={400}
          height={300}
          className="mx-auto mb-8 rounded-lg shadow-lg"
        />

        <h2 className="text-3xl font-bold mb-4">Página não encontrada.</h2>

        <p className="text-lg mb-8">
          Parece que a página que você procura não existe ou foi removida.
        </p>

        <div className="flex flex-col items-center gap-2">
          <Link href="/" className="text-blue-500 hover:underline text-base">
            Voltar para a Página Inicial
          </Link>
        </div>
      </div>
    </div>
  );
}
