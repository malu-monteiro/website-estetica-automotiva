import { about } from "../constants";

const About = () => {
  const { title, highlight, description, image } = about[0];

  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center text-left lg:text-left max-w-5xl mx-auto px-4">
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={image}
            alt="Serviço"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0 lg:ml-10">
          <h3 className="text-xl sm:text-5xl lg:text-6xl font-bold">
            {title} <br /> <span className="text-red-600">{highlight}</span>
          </h3>
          <div className="max-w-5xl mx-auto px-4"></div>
          <p className="text-base md:text-lg mt-6 text-justify break-words">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
