import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "../animations/index.jsx";
import {
  slideInLeft,
  slideInRight,
  staggerItem,
  buttonScale,
} from "../animations/variants.js";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "New Contact Message from Portfolio",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully.");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 4000);
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch {
      setStatus("Failed to send. Please try again.");
    }
  };

  return (
    <AnimatedSection
      id="contact"
      className="py-24 bg-[--color-primary] text-[--color-text-primary]"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div variants={slideInLeft}>
          <p className="text-sm font-medium uppercase tracking-widest text-[--color-accent] mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
            Let&apos;s work
            <br />
            together.
          </h2>
          <p className="text-[--color-text-secondary] max-w-md mb-8 leading-relaxed">
            Whether you have an idea for a new project, a question about my
            work, or just want to say hi — feel free to reach out. I&apos;m always
            open to connecting!
          </p>

          <AnimatePresence>
            {status && (
              <motion.p
                className="text-sm text-[--color-text-secondary]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {status}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.form
          id="contactForm"
          onSubmit={handleSubmit}
          className="flex flex-col space-y-6"
          variants={slideInRight}
        >
          {[
            { label: "Name", name: "name", type: "text" },
            { label: "Email", name: "email", type: "email" },
          ].map(({ label, name, type }) => (
            <motion.div
              key={name}
              variants={staggerItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <label className="block text-sm text-[--color-text-secondary] mb-2">
                {label}
              </label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-[--color-border] focus:border-[--color-accent] outline-none py-2 text-[--color-text-primary] transition-colors duration-300"
              />
            </motion.div>
          ))}
          <motion.div
            variants={staggerItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <label className="block text-sm text-[--color-text-secondary] mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full bg-transparent border-b border-[--color-border] focus:border-[--color-accent] outline-none py-2 resize-none text-[--color-text-primary] transition-colors duration-300"
            ></textarea>
          </motion.div>
          <motion.div variants={staggerItem}>
            <motion.button
              type="submit"
              className="px-8 py-3 rounded-lg border border-[--color-border] bg-[--color-accent] text-[--color-primary] font-medium text-sm hover:bg-[--color-accent-hover] transition-colors cursor-pointer"
              variants={buttonScale}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              Send Message
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </AnimatedSection>
  );
}
