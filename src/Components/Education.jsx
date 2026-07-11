import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { AnimatedSection } from "../animations/index.jsx";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "../animations/variants.js";

const education = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "University of Karachi",
    period: "2023 – Present",
    description: "Pursuing a degree in Software Engineering with a focus on full-stack web development, software architecture, and modern development practices.",
  },
];

const certifications = [
  {
    title: "Full Stack Development",
    issuer: "NAVTTC – Prime Minister's Youth Skills Development Program",
    period: "2024",
    desc: "Completed an industry-focused Full Stack Development program covering frontend, backend, databases, and modern web development practices.",
  },
  {
    title: "Full Stack Development",
    issuer: "TIHES Helpers Institute of Emerging Sciences",
    period: "2024",
    desc: "Completed hands-on Full Stack Development training with practical projects using modern web technologies.",
  },
  {
    title: "IT Specialist – JavaScript",
    issuer: "CertNexus & Pearson VUE",
    period: "2024",
    desc: "Earned an industry-recognized JavaScript certification demonstrating proficiency in programming fundamentals, problem-solving, and modern web development.",
  },
  {
    title: "Web & Mobile App Development",
    issuer: "Saylani Mass IT Training Program",
    period: "2025",
    desc: "Successfully completed a project-based Web & Mobile App Development program focused on the MERN Stack. Built responsive full-stack applications using React, Node.js, Express.js, MongoDB, and modern development practices while strengthening practical software engineering skills.",
  },
];

export default function Education() {
  return (
    <AnimatedSection
      id="education"
      className="py-20 bg-[--color-secondary] text-[--color-text-primary]"
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
            <span className="text-[--color-accent]">Education</span>
          </h2>
          <p className="text-[--color-text-secondary] max-w-2xl mx-auto">
            Academic background and professional certifications.
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {education.map((edu) => (
            <motion.div
              key={edu.degree}
              className="bg-[--color-primary] rounded-xl p-6 md:p-8 border border-[--color-border] hover:border-[--color-accent]/30 transition-colors duration-300"
              variants={staggerItem}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-[--color-accent]/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="text-[--color-accent]" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[--color-text-primary] mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-[--color-accent] font-medium text-sm">
                    {edu.institution}
                  </p>
                  <p className="text-[--color-text-secondary] text-sm mt-1">
                    {edu.period}
                  </p>
                  <p className="text-[--color-text-secondary] text-sm mt-3 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          <div>
            <h3 className="text-xl font-semibold mb-5 text-[--color-text-primary]">
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.title + cert.issuer}
                  className="flex flex-col bg-[--color-primary] rounded-xl p-6 border border-[--color-border] hover:border-[--color-accent]/30 transition-colors duration-300"
                  variants={staggerItem}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[--color-accent]/10 flex items-center justify-center shrink-0">
                      <Award className="text-[--color-accent]" size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[--color-text-primary]">{cert.title}</p>
                      <p className="text-xs text-[--color-accent] mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>
                  <p className="text-xs text-[--color-text-secondary] mb-2">{cert.period}</p>
                  <p className="text-sm text-[--color-text-secondary] leading-relaxed flex-1">{cert.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
