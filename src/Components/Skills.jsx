import { motion } from "framer-motion";
import { Monitor, Server, Database, Brain, Cloud, Briefcase } from "lucide-react";
import { AnimatedSection } from "../animations/index.jsx";
import {
  staggerContainer,
  staggerItem,
  iconRotate,
} from "../animations/variants.js";

const skills = [
  {
    icon: Monitor,
    title: "Frontend Development",
    desc: "Build responsive, high-performance web interfaces using modern frontend technologies and reusable components with a strong focus on accessibility and user experience.",
    tags: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Develop secure and scalable server-side applications using Node.js and Express while building REST APIs, authentication systems, and business logic.",
    tags: ["Node.js", "Express.js", "REST APIs", "JWT", "Authentication"],
  },
  {
    icon: Database,
    title: "Database Management",
    desc: "Design and manage application databases using both SQL and NoSQL technologies while creating efficient data models and CRUD operations.",
    tags: ["MongoDB", "MySQL", "Mongoose", "Sequelize"],
  },
  {
    icon: Brain,
    title: "AI & Automation",
    desc: "Build AI-powered applications and integrate Generative AI into web applications using modern APIs and automation workflows.",
    tags: ["Google Gemini API", "Prompt Engineering", "AI Integration", "Automation"],
  },
  {
    icon: Cloud,
    title: "Deployment & DevOps",
    desc: "Deploy and manage production-ready web applications using modern hosting platforms and Git-based development workflows.",
    tags: ["Git", "GitHub", "Vercel", "Netlify", "CI/CD", "Docker"],
  },
  {
    icon: Briefcase,
    title: "Professional Experience",
    desc: "Currently working as a Full-Stack Web Development Intern at Zerovertical Labs where I contribute to production applications, collaborate with developers, build features, debug issues, and improve application performance.",
    tags: ["Production Development", "Feature Development", "Git Workflow", "Code Reviews", "Team Collaboration"],
  },
];

export default function SkillsSection() {
  return (
    <AnimatedSection
      id="skills"
      className="py-20 bg-[--color-primary] text-[--color-text-primary]"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-semibold mb-4">Technical Skills</h2>
          <p className="text-[--color-text-secondary] max-w-3xl mx-auto leading-relaxed">
            Throughout my academic journey and professional internship at Zerovertical Labs,
            I&apos;ve developed practical experience building modern full-stack web applications.
            My primary focus is React and the MERN stack, while continuously expanding my
            expertise in backend development, databases, AI integration, and deployment.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skills.map(({ icon: Icon, title, desc, tags }) => (
            <motion.div
              key={title}
              className="group flex flex-col bg-[--color-secondary] border border-[--color-border] rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[--color-accent]/50 transition-all duration-300"
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex items-center justify-center w-11 h-11 rounded-lg bg-[--color-accent]/10 text-[--color-accent] mb-5"
                variants={iconRotate}
              >
                <Icon size={22} />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-[--color-text-secondary] leading-relaxed text-sm mb-5 flex-1">
                {desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-[--color-accent]/10 text-[--color-accent] border border-[--color-accent]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
