import { useNavigate } from "react-router-dom";

import { ArrowUpRight } from "lucide-react";

import { services } from "../constants";

export default function OurServices() {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId) => {
    const service = services.find((s) => s.id === serviceId);
    if (service) {
      navigate(service.path);
    }
  };

  return (
    <div
      id="services"
      className="relative mt-16 border-b border-neutral-800 min-h-[800px]"
    >
      <div className="text-center">
        <h2 className="text-xl sm:text-5xl lg:text-6xl font-bold mt-10 lg:mt-16">
          Nossos <span className="text-red-600">Serviços</span>
        </h2>
        <p className="text-base sm:text-lg lg:text-xl mt-2">
          Conheça nossos serviços e acesse para saber mais!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16 lg:mt-24 px-4">
        {" "}
        {services.map((service) => (
          <button
            key={service.id}
            className="relative flex flex-col items-center m-4 group"
            onClick={() => handleServiceClick(service.id)}
            aria-label={`Saiba mais sobre ${service.title}`}
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
            <a className="text-xl font-bold mt-4 transition-colors duration-300 group-hover:text-red-600">
              {service.title}
            </a>
          </button>
        ))}
      </div>
    </div>
  );
}
