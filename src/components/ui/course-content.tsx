import {
  Wrench,
  Target,
  Shield,
  Sparkles,
  Award,
  CheckCircle2,
} from "lucide-react";

const courseTopics = [
  {
    icon: Wrench,
    title: "Lixamento Manual e com Máquina",
    description:
      "Técnicas precisas de preparação da superfície com controle total do resultado final",
  },
  {
    icon: Target,
    title: "Controle de Lixamento",
    description:
      "Domínio completo das granulações e pressões para cada tipo de acabamento",
  },
  {
    icon: Shield,
    title: "Remoção de Craquelados",
    description:
      "Métodos avançados para eliminação completa de imperfeições estruturais",
  },
  {
    icon: Sparkles,
    title: "Remoção de Riscos e Imperfeições",
    description:
      "Correção profissional de danos superficiais e profundos na pintura",
  },
  {
    icon: Award,
    title: "Polimento e Proteção Final",
    description: "Técnicas de acabamento premium com proteção de longa duração",
  },
  {
    icon: CheckCircle2,
    title: "Técnicas Avançadas de Acabamento",
    description:
      "Métodos exclusivos para obter resultados de nível profissional",
  },
];

export const CourseContent = () => {
  return (
    <>
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-zinc-600 via-zinc-500 to-zinc-600 transform -translate-x-1/2" />

        <div className="space-y-4">
          {courseTopics.map((topic, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } group`}
            >
              {/* Content Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                <div className="bg-gradient-to-r from-zinc-900/60 to-zinc-800/30 backdrop-blur-sm border border-zinc-700/50 rounded-lg p-4 group-hover:border-zinc-600/50 transition-all duration-300 hover:transform hover:scale-105 group-hover:shadow-red-900/50 group-hover:shadow-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs font-medium text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded-full">
                      Etapa {index + 1}
                    </span>
                  </div>

                  <h4 className="text-base font-medium mb-2 group-hover:text-zinc-100 transition-colors duration-300">
                    {topic.title}
                  </h4>

                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    {topic.description}
                  </p>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-full flex items-center justify-center border-2 border-zinc-900 group-hover:from-red-800 group-hover:to-red-900 transition-all duration-300 shadow-lg z-10">
                  <topic.icon className="w-5 h-5 text-zinc-300 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>

              {/* Empty space on the other side */}
              <div className="w-5/12" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-zinc-800/40 to-zinc-900/40 backdrop-blur-sm border border-zinc-700/50 rounded-lg">
        <div className="flex items-center space-x-3 mb-3">
          <Award className="w-6 h-6 text-zinc-300" />
          <h4 className="font-syne text-xl font-light">
            Certificação Profissional
          </h4>
        </div>

        <p className="text-gray-400 font-light leading-relaxed text-sm">
          Certificado reconhecido que valida suas competências técnicas em
          estética automotiva de alto padrão.
        </p>
      </div>
    </>
  );
};
