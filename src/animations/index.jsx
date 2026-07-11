import { motion } from "framer-motion";
import { fadeInUp } from "./variants.js";

export function AnimatedSection({ children, variants = fadeInUp, className, ...props }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export function AnimatedDiv({ children, variants = fadeInUp, className, ...props }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
