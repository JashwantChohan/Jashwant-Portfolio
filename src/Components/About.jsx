import { FaCode, FaMobileAlt, FaServer } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[--color-primary] text-[--color-text-primary] py-20 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className=" Left-Side relative border-l-2 border-[--color-accent] pl-8 space-y-10 ">

          <div className="absolute top-2 left-[-7px] w-3 h-3 bg-[--color-accent] rounded-full bg-gradient-to-b from-[#f07665] via-[#f28b78] to-[#f07665]"></div>

          <div className="flex items-center gap-4">
            <FaCode className="text-[--color-accent] text-3xl" />
            <p className="text-lg font-medium">Website Development</p>
          </div>

          <div className="absolute top-20 left-[-7px] w-3 h-3 bg-[--color-accent] rounded-full bg-gradient-to-b from-[#f07665] via-[#f28b78] to-[#f07665]"></div>

          <div className="relative">
            <div className="absolute left-[-7px] top-[2px] w-3 h-3 bg-[--color-accent] rounded-full"></div>
            <div className="flex items-center gap-4">
              <FaMobileAlt className="text-[--color-accent] text-3xl" />
              <p className="text-lg font-medium">App Development</p>
            </div>
          </div>

          <div className="absolute top-37 left-[-7px] w-3 h-3 bg-[--color-accent] rounded-full bg-gradient-to-b from-[#f07665] via-[#f28b78] to-[#f07665]"></div>

          <div className="relative">
            <div className="absolute left-[-7px] top-[2px] w-3 h-3 bg-[--color-accent] rounded-full"></div>
            <div className="flex items-center gap-4">
              <FaServer className="text-[--color-accent] text-3xl" />
              <p className="text-lg font-medium">Website Hosting</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="Right-Side text-3xl md:text-4xl font-heading font-bold mb-4">
            About <span className="text-[--color-accent]">me</span>
          </h2>
          <p className="text-[--color-text-secondary] leading-relaxed mb-10">
            I’m a Software Engineering student passionate about building web applications using the MERN stack.
            I enjoy turning ideas into real, functional products and learning new technologies along the way.
            Every project I build helps me improve as a developer and deepen my understanding of how things work behind the scenes.
          </p>

          <div className="flex flex-wrap gap-10 text-center">
            <div>
              <h3 className="text-3xl font-bold text-[--color-text-primary]">
                10<span className="text-[--color-accent]">+</span>
              </h3>
              <p className="text-[--color-text-secondary] text-sm">
                Projects Completed
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[--color-text-primary]">
                100<span className="text-[--color-accent]">%</span>
              </h3>
              <p className="text-[--color-text-secondary] text-sm">
                Learning Dedication
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[--color-text-primary]">
                1<span className="text-[--color-accent]">+</span>
              </h3>
              <p className="text-[--color-text-secondary] text-sm">
                Years of Learning
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
