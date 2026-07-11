import { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { fadeInDown, staggerContainer, staggerItemFast } from "../animations/variants.js";
import { useTheme } from "../Context/ThemeContext.jsx";

const navItems = ["home", "about", "skills", "experience", "projects", "contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-[--color-primary]/80 backdrop-blur-xl text-[--color-text-primary] z-50 border-b border-[--color-border]"
      variants={fadeInDown}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 h-16">
        <motion.h1
          className="text-lg font-semibold font-[family-name:var(--font-heading)] tracking-tight cursor-pointer"
          whileHover={{ opacity: 0.8 }}
        >
          Jashwant Chohan
        </motion.h1>

        <div className="hidden md:flex items-center gap-8">
          <motion.ul
            className="flex items-center gap-8 text-sm"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item) => (
              <motion.li key={item} variants={staggerItemFast}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  className="relative cursor-pointer group py-1"
                  activeClass="text-[--color-accent]"
                  spy={true}
                >
                  <span className="text-[--color-text-secondary] hover:text-[--color-text-primary] transition-colors duration-200">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </span>
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[--color-accent] transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-[--color-secondary] border border-[--color-border] text-[--color-text-secondary] hover:text-[--color-text-primary] hover:border-[--color-border-light] transition-colors cursor-pointer"
            whileTap={{ scale: 0.95 }}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun size={16} />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon size={16} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-[--color-secondary] border border-[--color-border] text-[--color-text-secondary] hover:text-[--color-text-primary] transition-colors cursor-pointer"
            whileTap={{ scale: 0.95 }}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.div
                  key="sun-mobile"
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun size={16} />
                </motion.div>
              ) : (
                <motion.div
                  key="moon-mobile"
                  initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon size={16} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[--color-text-primary] focus:outline-none cursor-pointer"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <motion.span
                className="w-full h-px bg-current block"
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="w-full h-px bg-current block"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.1 }}
              />
              <motion.span
                className="w-full h-px bg-current block"
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden md:hidden"
          >
            <ul className="bg-[--color-primary] border-t border-[--color-border] px-6 py-4 space-y-1 text-sm">
              {navItems.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                >
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 cursor-pointer text-[--color-text-secondary] hover:text-[--color-text-primary] transition-colors"
                    activeClass="text-[--color-accent]"
                    spy={true}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
