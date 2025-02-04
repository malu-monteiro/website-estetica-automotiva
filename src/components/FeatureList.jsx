import CountUp from "react-countup";

import PropTypes from "prop-types";

export const FeatureList = ({ features }) => (
  <div className="grid md:grid-cols-2 gap-8 mt-32 md:mt-52">
    {features.map((stat) => (
      <div key={stat.id} className="flex items-start space-x-4">
        <stat.icon className="shrink-0 h-16 w-16 md:h-20 md:w-20 text-white" />
        <div>
          <h4 className="text-3xl md:text-4xl font-bold text-white">
            <CountUp
              start={0}
              end={parseInt(stat.title.replace(/\D/g, ""))}
              duration={2.5}
              separator=""
            />
            {stat.title.replace(/[0-9]/g, "")}
          </h4>
          <p className="text-base md:text-lg bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
            {stat.content}
          </p>
        </div>
      </div>
    ))}
  </div>
);

FeatureList.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};
