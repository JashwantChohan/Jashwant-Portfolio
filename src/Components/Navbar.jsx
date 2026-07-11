import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInDown, staggerContainer, staggerItemFast } from "../animations/variants.js";

const navItems = ["home", "about", "experience", "projects", "contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-[#111C2E] text-[--color-text-primary] z-50 shadow-md"
      variants={fadeInDown}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <motion.h1
          className="text-xl font-semibold cursor-pointer"
          whileHover={{ scale: 1.02 }}
        >
          Jashwant Chohan
        </motion.h1>
        <motion.ul
          className="hidden md:flex space-x-10 text-sm"
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
                className="relative cursor-pointer group"
                activeClass="text-[#f07665]"
                spy={true}
              >
                <span className="hover:text-[#f07665] transition-colors duration-200">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#f07665] to-[#f28b78] transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.li>
          ))}
        </motion.ul>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none text-2xl"
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          <motion.span
            key={isOpen ? "close" : "menu"}
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            className="inline-block"
          >
            ☰
          </motion.span>
        </motion.button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="bg-[#0d1824] px-6 pb-4 space-y-3 text-sm">
              {navItems.map((item) => (
                <motion.li
                  key={item}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="block cursor-pointer hover:text-[#f07665] transition-colors"
                    activeClass="text-[#f07665]"
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
