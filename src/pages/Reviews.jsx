import PropTypes from "prop-types";
import { elfsightConfig } from "../constants";
import { useElfsight } from "../hooks/useElfsight";
import { FadeInUp } from "../components/AnimatedElements";

export default function Reviews({ title = "Avaliações" }) {
  useElfsight();

  return (
    <section
      id="reviews"
      className="scroll-mt-16 relative border-b border-neutral-800 min-h-[600px]"
    >
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center">
          <FadeInUp>
            <h2 className="text-xl sm:text-5xl lg:text-6xl font-bold mb-10 inline-block">
              {title}
            </h2>
          </FadeInUp>
        </div>
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
