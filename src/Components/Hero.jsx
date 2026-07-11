import heroImg from "../assets/hero.png";
import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
  buttonScale,
  floating,
} from "../animations/variants.js";

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16 bg-[--color-primary] text-[--color-text-primary]"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-xl space-y-6">
        <motion.div variants={staggerItem}>
          <p className="text-sm font-medium uppercase tracking-widest text-[--color-accent] mb-3">
            Software Engineering Student
          </p>
          <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight">
            Hello, I&apos;m{" "}
            <span className="text-[--color-accent]">Jashwant</span>
          </h1>
        </motion.div>

        <motion.h2
          className="text-2xl md:text-3xl font-heading font-medium text-[--color-text-secondary]"
          variants={staggerItem}
        >
          Full-Stack Developer
        </motion.h2>

        <motion.p
          className="text-base text-[--color-text-secondary] leading-relaxed"
          variants={staggerItem}
        >
          Software Development Intern @ Zerovertical Labs
        </motion.p>

        <motion.div className="flex gap-3 pt-2" variants={staggerItem}>
          <motion.button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[--color-accent] text-[--color-primary] font-medium px-7 py-3 rounded-lg text-sm hover:bg-[--color-accent-hover] transition-colors cursor-pointer"
            variants={buttonScale}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            Get in Touch
          </motion.button>

          <motion.a
            href="/Jashwant Chohan cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[--color-border] text-[--color-text-primary] hover:border-[--color-border-light] font-medium px-7 py-3 rounded-lg text-sm transition-colors cursor-pointer inline-block"
            variants={buttonScale}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            Resume
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="relative"
        variants={staggerItem}
      >
        <motion.div
          className="relative"
          variants={floating}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="absolute inset-0 rounded-full bg-[--color-accent] opacity-15 blur-2xl scale-110 pointer-events-none" />

          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full border border-neutral-300 dark:border-white/25 overflow-hidden">
            <img
              src={heroImg}
              alt="Jashwant"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
