import ProjectSlideshow from "./ProjectSlideshow.jsx";


function Projects() {
  return (

    <section id="projects" className="py-20 bg-[--color-bg-primary] text-[--color-text-primary]">
      <div className="container mx-auto px-5">

        <div className="Header text-center mb-16 relative flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-6">Projects</h2>

          <div className="relative flex flex-col items-center">

            <div className="Line w-[2px] h-12 bg-gradient-to-b from-[#f07665] via-[#f28b78] to-[#f07665]"></div>
            <div className="Dot absolute top-15 w-2 h-2 rounded-full bg-gradient-to-b from-[#f07665] via-[#f28b78] to-[#f07665]"></div>
          </div>
        </div>

        {/* First Project */}
        <div className="Project-Card flex flex-col md:flex-row items-center justify-around gap-10 mb-20">
          <div className="Left-Content flex-1">
            <h3 className="text-2xl font-semibold mb-4">YouTube Clone</h3>
            <div className="flex flex-wrap gap-3 mb-4">
              {["React", "YouTube Data API", "React Router"].map((tech) => (
                <span
                  key={tech}
                  className="bg-[#1f2a3c]/60 text-[--color-text-secondary] px-4 py-1.5 rounded-full text-sm border border-[#2c3a52] backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-[--color-text-secondary] leading-relaxed mb-6">
              Built a YouTube clone using React and the YouTube Data API. It supports real-time video data, search functionality, and clean dynamic routing for video pages.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/JashwantChohan/Youtube_Clone"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-b from-[#f07665] via-[#f28b78] to-[#f07665] text-white px-5 py-2 rounded-[2px] font-medium hover:opacity-90 transition"
              >
                View GitHub
              </a>
              <a
                href="https://youtube-clone-six-omega-10.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[--color-accent] font-medium border-b-2 border-[--color-accent] hover:opacity-80 transition"
              >
                View Project →
              </a>
            </div>
          </div>

          <div className="Right-Image flex-1">
            <img
              src="/youtube_clone_shot.png"
              alt="YouTube Clone preview"
              className="rounded-lg border border-[--color-border] shadow-lg"
            />
          </div>
        </div>

        {/* Second Project */}
        <div className="Project-Card flex flex-col md:flex-row-reverse items-center justify-around gap-10">
          <div className="Right-Content flex-1">
            <h3 className="text-2xl font-semibold mb-4">Hopital Management System</h3>
            <div className="flex flex-wrap gap-3 mb-4">
              {["MERN Stack", "MongoDB", "Express", "React", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="bg-[#1f2a3c]/60 text-[--color-text-secondary] px-4 py-1.5 rounded-full text-sm border border-[#2c3a52] backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-[--color-text-secondary] leading-relaxed mb-6">
              Developed a Hospital Management System (HMS) to manage patients, doctors, and appointments efficiently. The system allows users to book appointments, view doctor details, and manage hospital data through a clean and responsive interface.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/JashwantChohan/Hospital-Management-System"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-b from-[#f07665] via-[#f28b78] to-[#f07665] text-white px-5 py-2 rounded-md font-medium hover:opacity-90 transition"
              >
                View GitHub
              </a>
              <a
                href="https://hospital-management-system-three-psi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[--color-accent] font-medium border-b-2 border-[--color-accent] hover:opacity-80 transition "
              >
                View Project →
              </a>
            </div>
          </div>

          <div className="left-Image flex-1">
            <ProjectSlideshow />
          </div>
        </div>

        {/* Third Project */}
        <div className="Project-Card flex flex-col md:flex-row items-center justify-around gap-10 mt-20">
          <div className="Left-Content flex-1">
            <h3 className="text-2xl font-semibold mb-4">eCommerce homepage</h3>
            <div className="flex flex-wrap gap-3 mb-4">
              {["React", "YouTube Data API", "React Router"].map((tech) => (
                <span
                  key={tech}
                  className="bg-[#1f2a3c]/60 text-[--color-text-secondary] px-4 py-1.5 rounded-full text-sm border border-[#2c3a52] backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-[--color-text-secondary] leading-relaxed mb-6">
              Built a fully responsive eCommerce homepage collection using React and Framer Motion. It features dynamic sliders, interactive galleries, and stylish predesigned inner pages to launch online stores quickly and efficiently.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/JashwantChohan/eCommerce-homepage"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-b from-[#f07665] via-[#f28b78] to-[#f07665] text-white px-5 py-2 rounded-[2px] font-medium hover:opacity-90 transition"
              >
                View GitHub
              </a>
              <a
                href="https://depot-beige.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[--color-accent] font-medium border-b-2 border-[--color-accent] hover:opacity-80 transition"
              >
                View Project →
              </a>
            </div>
          </div>

          <div className="Right-Image flex-1">
            <img
              src="/Depot.png"
              alt="YouTube Clone preview"
              className="rounded-lg border border-[--color-border] shadow-lg"
            />
          </div>
        </div>

        {/* Second Project */}
        <div className="Project-Card flex flex-col md:flex-row-reverse items-center mt-20 justify-around gap-10">
          <div className="Right-Content flex-1">
            <h3 className="text-2xl font-semibold mb-4">Hopital Management System</h3>
            <div className="flex flex-wrap gap-3 mb-4">
              {["MERN Stack", "MongoDB", "Express", "React", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="bg-[#1f2a3c]/60 text-[--color-text-secondary] px-4 py-1.5 rounded-full text-sm border border-[#2c3a52] backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-[--color-text-secondary] leading-relaxed mb-6">
              Developed an AI Chatbot that can respond to user queries, handle file uploads, and support emojis — all through a clean and interactive UI. It uses the Gemini API for intelligent responses and is built with modern JavaScript and modular structure.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/JashwantChohan/AI-Chatbot"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-b from-[#f07665] via-[#f28b78] to-[#f07665] text-white px-5 py-2 rounded-md font-medium hover:opacity-90 transition"
              >
                View GitHub
              </a>
              <a
                href="https://ai-chatbot-green-nine.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[--color-accent] font-medium border-b-2 border-[--color-accent] hover:opacity-80 transition "
              >
                View Project →
              </a>
            </div>
          </div>

          <div className="Right-Image flex-1">
            <img
              src="/ai-chatbot.png"
              alt="YouTube Clone preview"
              className="rounded-lg border border-[--color-border] shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>



  )
}

export default Projects
