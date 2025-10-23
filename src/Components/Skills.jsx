import { Code2, Smartphone, Server } from "lucide-react";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-[--color-bg-primary] text-[--color-text-primary]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">My Skills</h2>
          <p className="text-[--color-text-secondary] max-w-2xl mx-auto">
            I’m currently learning the <span className="text-[--color-accent] font-medium">MERN Stack</span> — 
            MongoDB, Express, React, and Node.js — to build full-stack web applications.
            Along the way, I’ve gained strong skills in front-end development, responsive design, 
            and deployment workflows.
          </p>
        </div>


        <div className="grid md:grid-cols-3 gap-10">
          <div className="Card-1 group relative bg-[--color-bg-secondary] rounded-2xl p-8 shadow-md hover:shadow-lg  border border-[#f07665] transition-all duration-300 border border-transparent hover:border-[--color-accent]">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-b from-[#f07665] via-[#f28b78] to-[#f07665] text-white mb-6">
              <Code2 size={30} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Frontend Development</h3>
            <p className="text-[--color-text-secondary] leading-relaxed">
              Experienced in building responsive, modern web interfaces using 
              React, Next.js, and Tailwind CSS for clean and fast user experiences.
            </p>
          </div>

          <div className="Card-2 group relative bg-[--color-bg-secondary] rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[--color-accent]">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-b from-[#f07665] via-[#f28b78] to-[#f07665] text-white mb-6">
              <Smartphone size={30} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Learning Backend</h3>
            <p className="text-[--color-text-secondary] leading-relaxed">
              Currently exploring backend development with Node.js and Express, 
              learning how to create APIs, handle authentication, and connect with MongoDB databases.
            </p>
          </div>

          <div className="Card-3 group relative bg-[--color-bg-secondary] rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[--color-accent]">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-b from-[#f07665] via-[#f28b78] to-[#f07665] text-white mb-6">
              <Server size={30} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Deployment & Hosting</h3>
            <p className="text-[--color-text-secondary] leading-relaxed">
              Deploying and managing websites using platforms like Vercel and Netlify, 
              with a focus on optimization and reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
