import heroImg from "../assets/hero.png";
import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
  floating,
  buttonScale,
} from "../animations/variants.js";

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-around px-6 md:px-16 bg-[--color-primary] text-[--color-text-primary]"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <div className="Left-Text-Section max-w-xl space-y-6 mt-16 md:mt-0">
        <motion.p className="text-5xl font-semibold" variants={staggerItem}>
          Hello
          <span className="ml-2 inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-b from-[#f07665] via-[#f28b78] to-[#f07665] shadow-[0_0_6px_rgba(255,107,53,0.8)]"></span>
        </motion.p>
        <motion.div className="flex items-center gap-4" variants={staggerItem}>
          <div className="w-40 h-1 bg-gradient-to-b from-[#f07665] via-[#f28b78] to-[#f07665] rounded-full"></div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold">
            I’m <span className="text-[--color-accent]">Jashwant</span>
          </h1>
        </motion.div>

        <motion.h2
          className="text-3xl md:text-5xl font-heading font-bold"
          variants={staggerItem}
        >
          Full-Stack Developer
        </motion.h2>

        <motion.div className="space-y-1" variants={staggerItem}>
          <p className="text-lg md:text-xl text-[--color-text-secondary]">
            Software Engineering Student
          </p>
          <p className="text-base md:text-lg text-[--color-accent]">
            Software Development Intern @ Zerovertical Labs
          </p>
        </motion.div>

        <motion.div className="flex gap-4 pt-4" variants={staggerItem}>
          <motion.button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="relative bg-gradient-to-b from-[#f07665] via-[#f28b78] to-[#f07665] text-white font-medium px-8 py-3 rounded-lg border border-[#FF7043] shadow-[0_4px_20px_rgba(255,107,53,0.3)] transition-shadow duration-300 hover:shadow-[0_6px_30px_rgba(255,107,53,0.6)] cursor-pointer"
            variants={buttonScale}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            Got a project?
          </motion.button>

          <motion.a
            href="/Jashwant_Chohan_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#f28b78] text-[--color-accent] hover:bg-[--color-accent-hover] hover:text-white font-medium px-6 py-3 rounded-[2px] transition-colors cursor-pointer inline-block"
            variants={buttonScale}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            My Resume
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="Right-Image-Section relative mt-12 md:mt-0"
        variants={staggerItem}
      >
        <motion.div
          className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-tr from-[--color-accent]/30 to-transparent blur-2xl -z-10"
          variants={floating}
        />
        <motion.img
          src={heroImg}
          alt="Jashwant"
          className="w-72 md:w-96 object-cover rounded-full shadow-[0_0_40px_-10px_rgba(255,107,53,0.6)]"
          variants={floating}
        />
      </motion.div>
    </motion.section>
  );
}
