import { ChevronsDown } from "lucide-react";

import { features } from "../constants";

import background from "../assets/background.png";
import Scheduling from "../components/SchedulingButton/Scheduling";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full h-screen flex flex-col items-start bg-cover bg-center relative"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="ml-6 mt-8 md:ml-[200px] md:mt-[130px]">
        <h1 className="text-xl md:text-xl text-white font-bold">
          MSS_Studio Car
        </h1>
        <p className="bg-gradient-to-r from-white to-gray-450 text-transparent bg-clip-text text-3xl md:text-5xl font-bold">
          Estética Automotiva
        </p>
        <p className="mt-4 text-white text-base md:text-lg max-w-[300px] md:max-w-lg leading-relaxed">
          Garantimos qualidade transformando a aparência do seu veículo,
          destacando os detalhes e trazendo brilho e proteção que fazem a
          diferença.
        </p>

        <div className="flex justify-start my-6 md:my-10">
          <Scheduling />

          <a
            href="#about"
            className="ml-3 bg-gray-450 hover:bg-opacity-60 py-2 md:py-3 px-4 md:px-6 rounded-full flex items-center text-sm md:text-base"
          >
            Saiba mais <ChevronsDown className="ml-2" />
          </a>
        </div>
        <div className="flex flex-col mt-32 md:mt-72 md:flex-row md:space-x-8 space-y-6 md:space-y-0">
          {features.map((stat) => (
            <div key={stat.id} className="flex items-center">
              <stat.icon className="mr-4 size-16 md:size-20 text-white" />
              <div className="flex flex-col">
                <h4 className="text-3xl md:text-4xl font-bold">{stat.title}</h4>
                <p className="text-base md:text-lg bg-gradient-to-r from-white to-gray-450 text-transparent bg-clip-text">
                  {stat.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
