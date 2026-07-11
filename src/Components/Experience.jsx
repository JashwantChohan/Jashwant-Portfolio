import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";
import { AnimatedSection } from "../animations/index.jsx";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "../animations/variants.js";

const experiences = [
  {
    role: "Full-Stack Web Development Intern",
    company: "Zerovertical Labs",
    period: "February 2026 – Present",
    icon: Building2,
    description: [
      "Shipped 10+ production features as part of a 7–10 member engineering team, building responsive React UIs integrated with backend REST APIs.",
      "Collaborated cross-functionally with senior engineers to debug, test, and improve application updates while maintaining stability across production releases.",
      "Strengthened expertise in React, Node.js, REST APIs, database design, Git, and collaborative software development workflows while contributing to a real production codebase.",
    ],
    technologies: ["React", "Node.js", "Express.js", "REST APIs", "MongoDB", "Git", "JavaScript", "Tailwind CSS"],
  },
];

export default function Experience() {
  return (
    <AnimatedSection
      id="experience"
      className="py-20 bg-[--color-primary] text-[--color-text-primary]"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-[--color-accent]">Experience</span>
          </h2>
          <p className="text-[--color-text-secondary] max-w-2xl mx-auto">
            Professional experience building and shipping production software.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#f07665] via-[#f28b78] to-[#f07665]" />

          <motion.div
            className="space-y-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {experiences.map((exp) => (
              <motion.div
                key={exp.role}
                className="relative pl-12 md:pl-14"
                variants={staggerItem}
              >
                <div className="absolute left-2.5 md:left-3 top-1 w-4 h-4 rounded-full bg-gradient-to-b from-[#f07665] via-[#f28b78] to-[#f07665] shadow-[0_0_8px_rgba(255,107,53,0.6)]" />

                <motion.div
                  className="bg-[--color-secondary] rounded-2xl p-6 md:p-8 border border-[#2c3a52] hover:border-[--color-accent]/50 transition-colors duration-300 shadow-lg"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-b from-[#f07665]/20 to-[#f28b78]/20 border border-[--color-accent]/30 shrink-0">
                      <exp.icon className="text-[--color-accent]" size={24} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-[--color-accent] font-medium text-base">
                        {exp.company}
                      </p>
                      <div className="flex items-center gap-1.5 mt-1 text-sm text-[--color-text-secondary]">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-[--color-text-secondary] leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[--color-accent] shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-[#1f2a3c]/60 text-[--color-text-secondary] border border-[#2c3a52] backdrop-blur-sm hover:border-[--color-accent]/50 hover:text-[--color-accent] transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
