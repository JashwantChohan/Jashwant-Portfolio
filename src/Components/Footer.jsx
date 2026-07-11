import { motion } from "framer-motion";
import { fadeIn, staggerContainer, staggerItem } from "../animations/variants.js";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/jashwant-chohan-622054258/",
    icon: "ri-linkedin-box-fill",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/JashwantChohan",
    icon: "ri-github-fill",
    label: "GitHub",
  },
  {
    href: "mailto:jchohan142@gmail.com",
    icon: "ri-mail-fill",
    label: "Email",
  },
];

const Footer = () => {
  return (
    <motion.footer
      className="border-t border-[--color-border] bg-[--color-secondary] text-[--color-text-secondary] py-8 text-center"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="text-xl font-semibold text-[--color-text-primary] mb-2">
        Jashwant Chohan
      </h2>
      <p className="max-w-2xl mx-auto text-sm text-[--color-text-secondary] mb-5">
        A passionate MERN stack learner, turning ideas into elegant web
        experiences — one project at a time.
      </p>

      <motion.div
        className="flex justify-center gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {socialLinks.map(({ href, icon, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[--color-accent] hover:text-[--color-accent-hover] transition-colors inline-block"
            variants={staggerItem}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={label}
          >
            <i className={`${icon} text-2xl`}></i>
          </motion.a>
        ))}
      </motion.div>

      <p className="text-xs text-[--color-text-secondary] mt-6 opacity-70">
        © {new Date().getFullYear()} Jashwant Chohan — All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
