import Head from "next/head";

export default function TermosDeUso() {
  const lastUpdated: string = "08 de Julho de 2025";

  return (
    <div className="min-h-screen bg-zinc-300 flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Termos de Uso - MSS Studio Car</title>
        <meta
          name="description"
          content="Termos e Condições de Uso do site da MSS Studio Car."
        />
      </Head>

      <div className="max-w-4xl w-full bg-zinc-100 shadow-lg rounded-lg p-6 md:p-8 lg:p-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-10">
          Termos e Condições de Uso
        </h1>

        <p className="text-sm text-gray-500 mb-6">
          Última atualização:{" "}
          <span className="font-semibold">{lastUpdated}</span>
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Este site é operado por{" "}
          <strong className="font-semibold">MSS_Studio Car</strong>, localizado
          em Pinhais - PR. Ao acessar e navegar por este site, você concorda em
          cumprir e estar vinculado a estes termos.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
          1. Finalidade
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          O site da MSS Studio Car tem caráter informativo e promocional, com o
          objetivo de apresentar os serviços de estética automotiva, incluindo:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 pl-4">
          <li>Polimento</li>
          <li>Revitalização de Faróis</li>
          <li>Vitrificação de Pintura</li>
          <li>Higienização Interna Premium</li>
          <li>Divulgação do nosso Curso de Restauração de Faróis</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          Não realizamos vendas nem coleta de dados por meio de formulários.
          Todas as interações são redirecionadas para plataformas externas, como
          WhatsApp e redes sociais.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
          2. Redirecionamentos
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Nosso site contém links para plataformas externas (WhatsApp, Google
          Reviews, Instagram, etc.). Não nos responsabilizamos pelo conteúdo ou
          práticas de privacidade desses sites.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
          3. Propriedade Intelectual
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Todos os textos, imagens e marcas apresentadas neste site são de
          propriedade da{" "}
          <strong className="font-semibold">MSS Studio Car</strong>, sendo
          proibida sua cópia ou reprodução sem autorização prévia.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
          4. Limitação de Responsabilidade
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Fazemos o possível para manter o site sempre atualizado e funcional.
          No entanto, não garantimos ausência de falhas técnicas ou
          indisponibilidades. O uso do site é de responsabilidade exclusiva do
          visitante.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
          5. Alterações nos Termos
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Podemos atualizar estes Termos e Condições a qualquer momento.
          Recomendamos que o visitante revise este conteúdo periodicamente.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
          6. Contato
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Em caso de dúvidas, entre em contato conosco pelo WhatsApp ou pelas
          redes sociais disponibilizadas neste site.
        </p>
      </div>
    </div>
  );
}
