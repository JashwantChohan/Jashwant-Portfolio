"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_bgg6zjo",
        "template_o0flrfo",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          title: "New Contact Message",
          time: new Date().toLocaleString()
        },
        "LkpOh1I8K14LUabd5"
      )
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus(""), 4000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("Failed to send. Please try again ❌");
        }
      );
  };

  return (
    <AnimatedSection
      id="contact"
      className="py-24 bg-[--color-bg-primary] text-[--color-text-primary]"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div className="Left-Side" variants={slideInLeft}>
          <h1 className="text-[--color-accent] tracking-wide mb-2">
            Contacts
          </h1>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Have a project?
            <br />
            Let’s talk!
          </h2>
          <p className="text-[--color-text-secondary] max-w-md mb-8">
            Whether you have an idea for a new project, a question about my
            work, or just want to say hi — feel free to reach out. I’m always
            open to connecting!
          </p>

          <motion.button
            type="submit"
            form="contactForm"
            className="px-8 py-3 rounded-md bg-linear-to-b from-[#f07665] via-[#f28b78] to-[#f07665] text-white font-medium"
            variants={buttonScale}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            Submit
          </motion.button>

          <AnimatePresence>
            {status && (
              <motion.p
                className="mt-4 text-sm text-[--color-text-secondary]"
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
                className="w-full bg-transparent border-b border-gray-500 focus:border-[#f07665] outline-none py-2 text-[--color-text-primary] transition-colors duration-300"
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
              className="w-full bg-transparent border-b border-gray-500 focus:border-[#f07665] outline-none py-2 resize-none text-[--color-text-primary] transition-colors duration-300"
            ></textarea>
          </motion.div>
        </motion.form>
      </div>
    </AnimatedSection>
  );
}
