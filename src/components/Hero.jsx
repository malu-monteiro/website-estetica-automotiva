import { ChevronsDown } from "lucide-react";

import background from "../assets/background.png";

const Hero = () => {
  return (
    <section
      className="w-full h-screen flex flex-col items-start bg-cover bg-center relative"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="ml-6 mt-6 md:ml-[150px] md:mt-[150px]">
        <h1 className="text-xl text-white font-bold">MSS_Studio Car</h1>
        <p className="bg-gradient-to-r from-white to-gray-450 text-transparent bg-clip-text text-5xl font-bold">
          Estética Automotiva
        </p>
        <p className="mt-4 text-white text-lg max-w-lg leading-relaxed">
          Garantimos qualidade transformando a aparência do seu veículo,
          destacando os detalhes e trazendo brilho e proteção que fazem a
          diferença.
        </p>

        <div className="flex justify-start my-10">
          <a
            href="#"
            className="bg-gray-450 hover:bg-opacity-60 py-3 px-6 rounded-full flex items-center"
          >
            Saiba mais <ChevronsDown className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
