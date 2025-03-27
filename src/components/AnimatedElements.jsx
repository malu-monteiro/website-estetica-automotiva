import { motion } from "framer-motion";
import PropTypes from "prop-types";

export const FadeInUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    style={{ display: "inline-block" }}
  >
    {children}
  </motion.div>
);

FadeInUp.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
};

export const AnimatedElements = ({ children, stagger = 0.1 }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: stagger },
      },
    }}
  >
    {children}
  </motion.div>
);

AnimatedElements.propTypes = {
  children: PropTypes.node.isRequired,
  stagger: PropTypes.number,
};
