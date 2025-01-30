import { about, socialMedia } from "../constants";

export default function About() {
  const { title, subtitle, highlight, description, image } = about[0];
  const { href, icon, text } = socialMedia[0];

  return (
    <section
      id="about"
      className="scroll-mt-36 relative border-b border-neutral-800 min-h-[600px]"
    >
      <div className="flex flex-col lg:flex-row items-start justify-between max-w-7xl mx-auto px-8 mt-20 gap-12">
        <div className="lg:w-2/5 flex flex-col items-start justify-start">
          <img
            src={image}
            alt="Sobre nós"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-3/5 mt-10 lg:mt-0">
          <h3 className="text-xl sm:text-5xl lg:text-6xl font-bold">{title}</h3>
          <p className="text-xl md:text-2xl lg:text-6xl font-bold">
            {subtitle} <span className="text-red-600">{highlight}</span>
          </p>

          <div className="bg-neutral-900/50 p-4 rounded-lg mt-6">
            <p className="text-base md:text-lg text-justify leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex justify-start mt-8 md:mt-10">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-450 hover:bg-opacity-60 py-2.5 md:py-3 px-6 md:px-8 rounded-full flex items-center text-sm md:text-base"
            >
              {icon} <span className="ml-2">{text}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
