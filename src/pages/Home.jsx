import { homeData } from "../constants/index.jsx";
import { features } from "../constants";
import { FeatureList } from "../components/FeatureList";
import { Button } from "../components/Button";
import { FadeInUp } from "../components/AnimatedElements";

export default function Home() {
  const {
    title,
    subtitle,
    description,
    backgroundImage,
    button,
    whatsappButton,
  } = homeData;

  return (
    <section
      id="home"
      className="scroll-mt-24 w-full h-screen flex flex-col items-start bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <header className="ml-6 mt-8 md:ml-[200px] md:mt-[130px] w-full max-w-[90%] md:max-w-2xl">
        {/* Grupo principal com animação */}
        <FadeInUp>
          <div className="flex flex-col">
            <h1 className="text-xl md:text-xl text-white font-bold">{title}</h1>
            <p className="bg-gradient-to-r from-white to-gray-450 text-transparent bg-clip-text text-3xl md:text-5xl font-bold mt-2">
              {subtitle}
            </p>
            <p className="mt-4 text-white text-base md:text-lg leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col md:flex-row gap-4 my-6 md:my-10">
              <Button
                href={whatsappButton.href}
                icon={whatsappButton.icon}
                aria-label={whatsappButton.ariaLabel}
                className={whatsappButton.className}
                iconPosition="left"
              >
                {whatsappButton.text}
              </Button>

              <Button
                href={button.href}
                icon={button.icon}
                aria-label={button.ariaLabel}
              >
                {button.text}
              </Button>
            </div>

            {/* FeatureList agora DENTRO do mesmo container animado */}
            <div className="mt-4">
              <FeatureList features={features} />
            </div>
          </div>
        </FadeInUp>
      </header>
    </section>
  );
}
