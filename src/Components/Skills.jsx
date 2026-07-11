import { motion } from "framer-motion";
import { Code2, Smartphone, Server } from "lucide-react";
import { AnimatedSection } from "../animations/index.jsx";
import {
  staggerContainer,
  staggerItem,
  iconRotate,
} from "../animations/variants.js";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    desc: "Experienced in building responsive, modern web interfaces using React, Next.js, and Tailwind CSS for clean and fast user experiences.",
  },
  {
    icon: Smartphone,
    title: "Learning Backend",
    desc: "Currently exploring backend development with Node.js and Express, learning how to create APIs, handle authentication, and connect with MongoDB databases.",
  },
  {
    icon: Server,
    title: "Deployment & Hosting",
    desc: "Deploying and managing websites using platforms like Vercel and Netlify, with a focus on optimization and reliability.",
  },
];

export default function SkillsSection() {
  return (
    <AnimatedSection
      id="skills"
      className="py-20 bg-[--color-bg-primary] text-[--color-text-primary]"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-semibold mb-4">My Skills</h2>
          <p className="text-[--color-text-secondary] max-w-2xl mx-auto">
            I’m currently learning the <span className="text-[--color-accent] font-medium">MERN Stack</span> —
            MongoDB, Express, React, and Node.js — to build full-stack web applications.
            Along the way, I’ve gained strong skills in front-end development, responsive design,
            and deployment workflows.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              className="group relative bg-[--color-bg-secondary] rounded-2xl p-8 shadow-md border border-transparent hover:border-[--color-accent] transition-colors duration-300"
              variants={staggerItem}
              whileHover="hover"
              initial="rest"
            >
              <motion.div
                className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-b from-[#f07665] via-[#f28b78] to-[#f07665] text-white mb-6"
                variants={iconRotate}
              >
                <Icon size={30} />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-[--color-text-secondary] leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
