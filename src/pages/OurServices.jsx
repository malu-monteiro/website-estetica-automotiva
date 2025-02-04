import { useNavigate } from "react-router-dom";

import { services, servicesHeader } from "../constants";

import { ServicesCard } from "../components/ServicesCard";

export default function OurServices() {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId) => {
    const service = services.find((s) => s.id === serviceId);
    if (service) {
      navigate(service.path);
    }
  };

  const { title, highlight, subtitle } = servicesHeader;

  return (
    <section
      id="services"
      className="scroll-mt-24 relative mt-8 md:mt-16 border-b border-neutral-800 min-h-[800px]"
    >
      <div className="text-center px-6 md:px-8">
        <h2 className="text-xl sm:text-5xl lg:text-6xl font-bold mt-8 md:mt-16">
          {title} <span className="text-red-600">{highlight}</span>
        </h2>
        <p className="text-base sm:text-lg lg:text-xl mt-2 max-w-[300px] md:max-w-lg mx-auto">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mt-12 md:mt-24 px-6 md:px-8">
        {services.map((service) => (
          <ServicesCard
            key={service.id}
            service={service}
            onClick={handleServiceClick}
          />
        ))}
      </div>
    </section>
  );
}
