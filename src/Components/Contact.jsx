"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

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
    <section
      id="contact"
      className="py-24 bg-[--color-bg-primary] text-[--color-text-primary]"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <div className=" Left-Side ">
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

          <button
            type="submit"
            form="contactForm"
            className="px-8 py-3 rounded-md bg-linear-to-b from-[#f07665] via-[#f28b78] to-[#f07665] text-white font-medium hover:opacity-90 transition-all duration-300"
          >
            Submit
          </button>

          {status && (
            <p className="mt-4 text-sm text-[--color-text-secondary]">
              {status}
            </p>
          )}
        </div>

        {/* Right Side - Form */}
        <form
          id="contactForm"
          onSubmit={handleSubmit}
          className="flex flex-col space-y-6"
        >
          <div>
            <label className="block text-sm text-[--color-text-secondary] mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-gray-500 focus:border-[#f07665] outline-none py-2 text-[--color-text-primary]"
            />
          </div>

          <div>
            <label className="block text-sm text-[--color-text-secondary] mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-gray-500 focus:border-[#f07665] outline-none py-2 text-[--color-text-primary]"
            />
          </div>

          <div>
            <label className="block text-sm text-[--color-text-secondary] mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full bg-transparent border-b border-gray-500 focus:border-[#f07665] outline-none py-2 resize-none text-[--color-text-primary]"
            ></textarea>
          </div>
        </form>
      </div>
    </section>
  );
}
