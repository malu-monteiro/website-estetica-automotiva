import { ChevronsDown } from "lucide-react";
import { features } from "../constants";
import background from "../assets/background.png";
import Scheduling from "../components/Scheduling/Scheduling";
import CountUp from "react-countup";

export default function Home() {
  return (
    <section
      id="home"
      className="w-full h-screen flex flex-col items-start bg-cover bg-center relative"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="ml-6 mt-8 md:ml-[200px] md:mt-[130px]">
        <h1 className="text-xl md:text-xl text-white font-bold">@</h1>
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
        <div className="grid md:grid-cols-2 gap-8 mt-52">
          {features.map((stat) => (
            <div key={stat.id} className="flex items-start space-x-4">
              <stat.icon className="shrink-0 h-16 w-16 md:h-20 md:w-20 text-white" />
              <div>
                <h4 className="text-3xl md:text-4xl font-bold text-white">
                  <CountUp
                    start={0}
                    end={parseInt(stat.title.replace(/\D/g, ""))}
                    duration={2.5}
                    separator=""
                  />
                  {stat.title.replace(/[0-9]/g, "")}
                </h4>
                <p className="text-base md:text-lg bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
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
