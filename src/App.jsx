import React from 'react'
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Skills from "./Components/Skills.jsx";
import Projects from "./Components/Projects.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div className='bg-gray-900  text-white'>
      <Navbar />

      <section id='Home'>
        <Hero />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      <section id='project'>
        <Projects />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

export default App
