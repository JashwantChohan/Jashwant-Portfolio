import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import ProjectSlideshow from "./ProjectSlideshow.jsx";
import { AnimatedSection } from "../animations/index.jsx";
import {
  staggerContainer,
  staggerItem,
  buttonScale,
} from "../animations/variants.js";

const projects = [
  {
    title: "YouTube Clone",
    tech: ["React", "YouTube Data API", "React Router"],
    desc: "Built a YouTube clone using React and the YouTube Data API. It supports real-time video data, search functionality, and clean dynamic routing for video pages.",
    github: "https://github.com/JashwantChohan/Youtube_Clone",
    live: "https://youtube-clone-six-omega-10.vercel.app",
    img: "/youtube_clone_shot.png",
    reverse: false,
  },
  {
    title: "Hopital Management System",
    tech: ["MERN Stack", "MongoDB", "Express", "React", "Node.js"],
    desc: "Developed a Hospital Management System (HMS) to manage patients, doctors, and appointments efficiently. The system allows users to book appointments, view doctor details, and manage hospital data through a clean and responsive interface.",
    github: "https://github.com/JashwantChohan/Prescripto",
    live: "https://prescripto-zeta-two.vercel.app/",
    slideshow: true,
    reverse: true,
  },
  {
    title: "eCommerce homepage",
    tech: ["React", "YouTube Data API", "React Router"],
    desc: "Built a fully responsive eCommerce homepage collection using React and Framer Motion. It features dynamic sliders, interactive galleries, and stylish predesigned inner pages to launch online stores quickly and efficiently.",
    github: "https://github.com/JashwantChohan/eCommerce-homepage",
    live: "https://depot-beige.vercel.app",
    img: "/Depot.png",
    reverse: false,
  },
  {
    title: "AI Chatbot",
    tech: ["HTML", "CSS", "JS", "GEMINI API"],
    desc: "Developed an AI Chatbot that can respond to user queries, handle file uploads, and support emojis — all through a clean and interactive UI. It uses the Gemini API for intelligent responses and is built with modern JavaScript and modular structure.",
    github: "https://github.com/JashwantChohan/AI-Chatbot",
    live: "https://ai-chatbot-green-nine.vercel.app",
    img: "/ai-chatbot.png",
    reverse: true,
  },
  {
    title: "Pitch Craft",
    tech: ["React", "YouTube Data API", "React Router"],
    desc: "Built a fully responsive eCommerce homepage collection using React and Framer Motion. It features dynamic sliders, interactive galleries, and stylish predesigned inner pages to launch online stores quickly and efficiently.",
    github: "https://github.com/JashwantChohan/PitchCraft",
    live: "https://pitch-craft-beta.vercel.app",
    img: "/pitchCraft.png",
    reverse: false,
  },
];

function ProjectCard({ project, index }) {
  const { title, tech, desc, github, live, img, slideshow, reverse } = project;

  const media = slideshow ? (
    <div className="flex-1">
      <ProjectSlideshow />
    </div>
  ) : (
    <div className="flex-1">
      <motion.div
        className="relative overflow-hidden rounded-xl border border-[--color-border] bg-[--color-secondary] group"
        whileHover="hover"
      >
        <motion.img
          src={img}
          alt={`${title} preview`}
          className="w-full h-full object-cover"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.04, transition: { duration: 0.5, ease: "easeOut" } },
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[--color-primary]/60 via-transparent to-transparent"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1, transition: { duration: 0.3 } },
          }}
        />
        <motion.div
          className="absolute bottom-4 right-4 flex gap-2"
          variants={{
            rest: { opacity: 0, y: 8 },
            hover: { opacity: 1, y: 0, transition: { duration: 0.3 } },
          }}
        >
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[--color-primary]/80 backdrop-blur-sm border border-[--color-border] hover:border-[--color-accent]/50 transition-colors"
            aria-label="View source code"
          >
            <Github size={16} className="text-[--color-text-primary]" />
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[--color-primary]/80 backdrop-blur-sm border border-[--color-border] hover:border-[--color-accent]/50 transition-colors"
            aria-label="View live project"
          >
            <ExternalLink size={16} className="text-[--color-text-primary]" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );

  return (
    <motion.div
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
        index > 0 ? "mt-20" : ""
      }`}
      variants={staggerItem}
    >
      <div
        className={`flex-1 space-y-4 ${
          reverse ? "md:order-2" : "md:order-1"
        }`}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-[--color-text-primary]">
          {title}
        </h3>

        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-xs font-medium rounded-full bg-[--color-accent]/10 text-[--color-accent] border border-[--color-accent]/20 transition-colors duration-200"
            >
              {t}
            </span>
          ))}
        </div>

        <p className="text-[--color-text-secondary] leading-relaxed text-sm">
          {desc}
        </p>

        <div className="flex gap-3 pt-2">
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[--color-accent] text-[--color-primary] px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-[--color-accent-hover] transition-colors"
            variants={buttonScale}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <Github size={16} />
            GitHub
          </motion.a>
          <motion.a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[--color-text-primary] font-medium text-sm border border-[--color-border] px-5 py-2.5 rounded-lg hover:border-[--color-border-light] transition-colors duration-200"
            variants={buttonScale}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <ExternalLink size={16} />
            Live Demo
          </motion.a>
        </div>
      </div>

      <div className={`flex-1 w-full ${reverse ? "md:order-1" : "md:order-2"}`}>
        {media}
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <AnimatedSection
      id="projects"
      className="py-20 bg-[--color-primary] text-[--color-text-primary]"
    >
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-[--color-accent]">Projects</span>
          </h2>
          <p className="text-[--color-text-secondary] max-w-2xl mx-auto">
            Real-world applications built from the ground up — from concept to deployment.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

export default Projects;
