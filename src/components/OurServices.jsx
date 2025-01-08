import { ArrowUpRight } from "lucide-react";
import { services } from "../constants";

const OurServices = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <h2 className="text-xl sm:text-5xl lg:text-6xl font-bold mt-10 lg:mt-20">
          Nossos <span className="text-red-600">serviços</span>
        </h2>
        <p className="text-base sm:text-lg lg:text-xl mt-2">
          Explore as opções que mais atendem às suas necessidades e acesse para
          saber mais!
        </p>
      </div>
      <div className="flex flex-wrap justify-center mt-20 lg:mt-40 cursor-pointer">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative flex flex-col items-center m-4 group"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-40 h-40 lg:w-96 lg:h-40 object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-bold flex items-center">
                Saiba mais <ArrowUpRight className="ml-2" />
              </span>
            </div>
            <a className="text-xl md:text-xl font-bold mt-4 transition-colors duration-300 group-hover:text-red-600">
              {service.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OurServices;
