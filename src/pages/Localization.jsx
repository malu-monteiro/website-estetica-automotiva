// Horário de atendimento + Mapa de localização
import { useEffect } from "react";

export default function Localization() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="localization"
      className="relative border-b border-neutral-800 min-h-[600px]"
    >
      <div className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Avaliações</h2>
        <div
          className="elfsight-app-b0a7a526-ed17-4886-9fc9-ad49a323cc48"
          data-elfsight-app-lazy
        ></div>
      </div>
    </div>
  );
}
