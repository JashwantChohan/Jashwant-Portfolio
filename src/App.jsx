import { motion } from "framer-motion"
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Skills from "./Components/Skills.jsx";
import Experience from "./Components/Experience.jsx";
import Projects from "./Components/Projects.jsx";
import Education from "./Components/Education.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import ScrollProgress from "./Components/ScrollProgress.jsx";
import BackToTop from "./Components/BackToTop.jsx";
import { fadeIn } from "./animations/variants.js";

function App() {
  return (
    <motion.div
      className="bg-[--color-primary] text-[--color-text-primary]"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <ScrollProgress />
      <Navbar />

      <section id='home'>
        <Hero />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      <section id='experience'>
        <Experience />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section id='education'>
        <Education />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <Footer />
      <BackToTop />
    </motion.div>
  )
}

export default App
