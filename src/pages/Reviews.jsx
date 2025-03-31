import PropTypes from "prop-types";
import { elfsightConfig } from "../constants";
import { useElfsight } from "../hooks/useElfsight";

export default function Reviews({ title = "Avaliações" }) {
  useElfsight();

  return (
    <section
      id="reviews"
      className="scroll-mt-16 relative border-b border-neutral-800 min-h-[600px]"
    >
      <div className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-neutral-300 text-center">
          {title}
        </h2>
        <div
          className={`elfsight-app-${elfsightConfig.appId}`}
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
}

Reviews.propTypes = {
  title: PropTypes.string,
};
