import Head from "next/head";

export default function PoliticaDePrivacidade() {
  const lastUpdated: string = "08 de Julho de 2025";

  return (
    <div className="min-h-screen bg-zinc-300 flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Política de Privacidade - MSS_Studio Car</title>
        <meta
          name="description"
          content="Política de Privacidade do site da MSS_Studio Car."
        />
      </Head>

      <div className="max-w-4xl w-full bg-zinc-100 shadow-lg rounded-lg p-6 md:p-8 lg:p-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-10">
          Política de Privacidade
        </h1>

        <p className="text-sm text-gray-500 mb-6">
          Última atualização:{" "}
          <span className="font-semibold">{lastUpdated}</span>
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          A <strong className="font-semibold">MSS_Studio Car</strong> valoriza
          sua privacidade. Esta política descreve como lidamos com informações
          obtidas indiretamente durante a navegação no site.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
          1. Dados Coletados
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Nosso site não coleta informações pessoais diretamente (não há
          formulários ou áreas de login).
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          No entanto, ao acessar nosso site, alguns dados de navegação podem ser
          registrados de forma automática, como:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 pl-4">
          <li>Endereço IP</li>
          <li>Data e hora do acesso</li>
          <li>Navegador utilizado</li>
          <li>Página visitada</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          Essas informações são utilizadas apenas para fins de monitoramento de
          acessos, podendo gerar notificações automáticas por e-mail para a
          equipe da empresa. Esses dados não são armazenados nem compartilhados
          com terceiros.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
          2. Cookies
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Nosso site pode utilizar cookies essenciais para garantir sua
          funcionalidade. Não utilizamos cookies de rastreamento ou marketing.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
          3. Compartilhamento de Dados
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Não compartilhamos, vendemos ou transferimos dados a terceiros. Os
          acessos registrados são apenas para controle interno.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
          4. Links para Terceiros
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Nosso site contém links para redes sociais e serviços externos. Cada
          uma dessas plataformas possui sua própria política de privacidade.
          Recomendamos que você as leia ao acessá-las.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
          5. Segurança
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Apesar de não coletarmos dados sensíveis, adotamos medidas técnicas
          para manter a segurança das informações básicas de navegação.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
          6. Direitos do Usuário
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Nos termos da Lei Geral de Proteção de Dados (LGPD), você pode
          solicitar informações ou esclarecimentos sobre dados eventualmente
          coletados indiretamente durante sua navegação.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
          7. Contato
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Para qualquer dúvida sobre esta política, entre em contato conosco
          pelo WhatsApp ou redes sociais oficiais.
        </p>
      </div>
    </div>
  );
}
