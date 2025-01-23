import { motion } from "framer-motion";

import PropTypes from "prop-types";

import { itemVariants, listItemVariants } from "../../constants/animations";

export default function ServiceList({ title, items }) {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-neutral-900/50 p-6 rounded-lg"
    >
      <h3 className="text-lg sm:text-2xl font-semibold mb-4 flex items-center">
        {title}
      </h3>
      <motion.ul className="list-none space-y-3 text-base sm:text-lg">
        {items.map((item, index) => (
          <motion.li
            key={index}
            variants={listItemVariants}
            className="flex items-start"
          >
            <span className="text-red-600 mr-2">→</span>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

ServiceList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
