import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { ChevronDown } from "lucide-react";
import { containerVariants, itemVariants } from "../../constants/animations";

export default function ServiceList({ title, items = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <motion.div className="bg-neutral-900/50 p-4 rounded-lg">
      <button
        onClick={toggleOpen}
        className="w-full text-base sm:text-lg font-semibold mb-2 flex items-center justify-between text-white"
        aria-expanded={isOpen}
        aria-controls="service-list"
      >
        {title}
        <ChevronDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="list-none space-y-3 text-base sm:text-lg overflow-hidden text-white"
            id="service-list"
          >
            {items.map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-start"
              >
                <span className="text-red-600 mr-2">→</span>
                {item}
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
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ServiceList.defaultProps = {
  items: [],
};
