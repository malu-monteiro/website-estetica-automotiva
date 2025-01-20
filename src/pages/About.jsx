import { about } from "../constants";
import image1 from "../assets/polimento-farol.png";
import { BsInstagram } from "react-icons/bs";

export default function About() {
  const { title, highlight, description } = about[0];

  return (
    <div
      id="about"
      className="relative border-b border-neutral-800 min-h-[600px]"
    >
      <div className="flex flex-col lg:flex-row items-start justify-between max-w-7xl mx-auto px-8 mt-20 gap-12">
        <div className="lg:w-1/2 flex flex-col items-start justify-start lg:pr-8">
          <img
            src={image1}
            alt="Sobre nós"
            className="w-full sm:w-4/5 lg:w-[600px] h-[340px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0 lg:ml-10">
          <h3 className="text-xl md:text-2xl lg:text-6xl font-bold">
            {title} <span className="text-red-600">{highlight}</span>
          </h3>
          <div className="max-w-5xl mx-auto px-4"></div>
          <p className="text-base md:text-lg mt-6 text-justify break-words">
            {description}
          </p>

          <div className="flex justify-start my-6 md:my-10 space-x-4">
            <a
              href="https://www.instagram.com/mss_studiocar"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-450 hover:bg-opacity-60 py-2 md:py-3 px-4 md:px-6 rounded-full flex items-center text-sm md:text-base"
            >
              <BsInstagram className="mr-2" /> Nos acompanhe no Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
