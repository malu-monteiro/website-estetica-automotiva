import { useNavigate } from "react-router-dom";
import { services, servicesHeader } from "../constants";
import { ServicesCard } from "../components/ServicesCard";
import { FadeInUp, AnimatedElements } from "../components/AnimatedElements";

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
      className="relative scroll-mt-16"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/realistic-shiny-focus-light-effect-dark-background_1017-55407.jpg?t=st=1742939906~exp=1742943506~hmac=a16ef04b48f4e293c3c39ed52bd38544e688170f3cb5d562cea98b13c76fe24f&w=1060')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="min-h-[800px] w-full border-b border-neutral-800">
        <div className="container mx-auto px-6 md:px-8 py-12 md:py-20">
          <AnimatedElements stagger={0.15}>
            <div className="text-center mb-12 md:mb-16">
              <FadeInUp>
                <div>
                  <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
                    {title} <span className="text-red-600">{highlight}</span>
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl max-w-[300px] md:max-w-lg mx-auto">
                    {subtitle}
                  </p>
                </div>
              </FadeInUp>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <FadeInUp key={service.id} delay={0.1 + index * 0.05}>
                  <ServicesCard
                    service={service}
                    onClick={handleServiceClick}
                  />
                </FadeInUp>
              ))}
            </div>
          </AnimatedElements>
        </div>
      </div>
    </section>
  );
}
