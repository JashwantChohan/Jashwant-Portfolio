import { FaCode, FaMobileAlt, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";
import { AnimatedSection } from "../animations/index.jsx";
import {
  slideInLeft,
  slideInRight,
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "../animations/variants.js";

const services = [
  { icon: FaCode, label: "Website Development" },
  { icon: FaMobileAlt, label: "App Development" },
  { icon: FaServer, label: "Website Hosting" },
];

export default function About() {
  return (
    <AnimatedSection
      id="about"
      className="bg-[--color-primary] text-[--color-text-primary] py-20 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="Left-Side relative border-l-2 border-[--color-accent] pl-8 space-y-10"
          variants={slideInLeft}
        >
          <div className="absolute top-2 left-[-7px] w-3 h-3 bg-[--color-accent] rounded-full bg-gradient-to-b from-[#f07665] via-[#f28b78] to-[#f07665]"></div>

          {services.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              className="flex items-center gap-4"
              variants={staggerItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <Icon className="text-[--color-accent] text-3xl" />
              <p className="text-lg font-medium">{label}</p>
            </motion.div>
          ))}

          <div className="absolute top-20 left-[-7px] w-3 h-3 bg-[--color-accent] rounded-full bg-gradient-to-b from-[#f07665] via-[#f28b78] to-[#f07665]"></div>

          <div className="absolute top-37 left-[-7px] w-3 h-3 bg-[--color-accent] rounded-full bg-gradient-to-b from-[#f07665] via-[#f28b78] to-[#f07665]"></div>
        </motion.div>

        <motion.div variants={slideInRight}>
          <h2 className="Right-Side text-3xl md:text-4xl font-heading font-bold mb-4">
            About <span className="text-[--color-accent]">me</span>
          </h2>
          <motion.p
            className="text-[--color-text-secondary] leading-relaxed mb-10"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Software Engineering undergraduate and Full-Stack Developer with hands-on experience building responsive, scalable web applications using React, Node.js, and REST APIs. Proven ability to design and ship complete full-stack systems—from JWT-secured backends to polished, production-ready UIs—including a Hospital Management System and an AI Chatbot powered by Google Gemini. Currently strengthening these skills through an active internship at Zerovertical Labs, with a growing focus on GenAI integration and automation. Seeking a Junior Full Stack Developer role in Karachi to deliver enterprise-grade solutions and grow within an innovative engineering team.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-10 text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { value: "10", suffix: "+", label: "Projects Completed" },
              { value: "6", suffix: "+", label: "Months Professional Experience" },
              { value: null, suffix: null, label: "Full-Stack Development Intern" },
            ].map((stat) => (
              <motion.div key={stat.label} variants={staggerItem}>
                {stat.value !== null ? (
                  <h3 className="text-3xl font-bold text-[--color-text-primary]">
                    {stat.value}<span className="text-[--color-accent]">{stat.suffix}</span>
                  </h3>
                ) : (
                  <div className="h-[36px]" />
                )}
                <p className="text-[--color-text-secondary] text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
