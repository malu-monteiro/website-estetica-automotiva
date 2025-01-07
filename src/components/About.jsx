import { ABOUT_TITLE, ABOUT_HIGHLIGHT, ABOUT_DESCRIPTION } from "../constants";

const About = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <h2 className="text-xl sm:text-5xl lg:text-6xl font-bold mt-10 lg:mt-20 tracking ">
          {ABOUT_TITLE} <span className="text-red-600">{ABOUT_HIGHLIGHT}</span>
        </h2>
        <p className="text-base sm:text-lg lg:text-xl mt-2">
          {ABOUT_DESCRIPTION}
        </p>
      </div>
    </div>
  );
};

export default About;
