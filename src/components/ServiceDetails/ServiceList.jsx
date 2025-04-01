import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import PropTypes from "prop-types";

export default function ServiceList({ title, items = [], icon }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="bg-neutral-900/70 backdrop-blur-md rounded-xl border border-neutral-800 shadow-lg w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
      >
        <div className="flex items-center gap-3">
          <div className="text-lg sm:text-xl">{icon}</div>
          <h3 className="text-lg sm:text-xl font-medium sm:font-semibold text-white">
            {title}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-gray-400 text-base sm:text-lg"
          />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.2 },
                opacity: { duration: 0.1 },
              },
            }}
            className="px-4 sm:px-5 pb-4 sm:pb-5 space-y-2 sm:space-y-3"
          >
            {items.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start text-gray-300 text-sm sm:text-base pl-2"
              >
                <span className="inline-block w-2 h-2 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0 bg-current"></span>
                <span className="flex-1 break-words">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

ServiceList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.node,
};

ServiceList.defaultProps = {
  items: [],
  icon: null,
};
