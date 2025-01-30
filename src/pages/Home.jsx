import { homeData } from "../constants/index.jsx";
import { features } from "../constants";

import { FeatureList } from "../components/FeatureList";
import Scheduling from "../components/Scheduling";
import { Button } from "../components/Button";

export default function Home() {
  const { title, subtitle, description, backgroundImage, button } = homeData;

  return (
    <section
      id="home"
      className="scroll-mt-24 w-full h-screen flex flex-col items-start bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="ml-6 mt-8 md:ml-[200px] md:mt-[130px]">
        <h1 className="text-xl md:text-xl text-white font-bold">{title}</h1>
        <p className="bg-gradient-to-r from-white to-gray-450 text-transparent bg-clip-text text-3xl md:text-5xl font-bold">
          {subtitle}
        </p>
        <p className="mt-4 text-white text-base md:text-lg max-w-[300px] md:max-w-lg leading-relaxed">
          {description}
        </p>

        <div className="flex justify-start my-6 md:my-10">
          <Scheduling />

          <Button
            href={button.href}
            className="ml-3"
            icon={button.icon}
            aria-label={button.ariaLabel}
          >
            {button.text}
          </Button>
        </div>

        <FeatureList features={features} />
      </div>
    </section>
  );
}
