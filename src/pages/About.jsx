import { about } from "../constants";

import Carousel from "../components/Carousel";

const About = () => {
  const { title, highlight, description } = about[0];

  return (
    <div
      id="about"
      className="relative border-b border-neutral-800 min-h-[800px]"
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between text-center lg:text-left max-w-7xl mx-auto px-8 mt-20">
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start lg:justify-end lg:mr-10">
          <Carousel className="w-80 mt-8 max-w-md rounded-lg shadow-lg" />
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0 lg:ml-10">
          <h3 className="text-xl md:text-2xl lg:text-6xl font-bold">
            {title} <span className="text-red-600">{highlight}</span>
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
