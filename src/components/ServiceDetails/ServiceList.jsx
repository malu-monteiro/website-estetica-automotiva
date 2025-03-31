import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import PropTypes from "prop-types";

export default function ServiceList({ title, items = [], icon }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="bg-neutral-900/70 backdrop-blur-md rounded-xl border border-neutral-800 shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-800/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="text-xl">{icon}</div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-gray-400 text-lg"
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
            className="px-5 pb-5 space-y-3 overflow-hidden"
          >
            {items.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start text-gray-300 pl-2"
                initial={{ x: -10 }}
                animate={{ x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <span className="inline-block w-2 h-2 rounded-full mt-2.5 mr-3 flex-shrink-0 bg-current"></span>
                <span className="flex-1">{item}</span>
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
