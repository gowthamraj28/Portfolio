import React, { useEffect, useState } from "react";
import "./App.css";
import NavContainer from "./components/NavComponents/NavContainer";
import Hero from "@/pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Skills from "./pages/Skills";

const App = () => {
  const sections = [
    "about",
    "education",
    "projects",
    "skills",
    "experience",
    "contact",
  ];
  const [active, setActive] = useState("about");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        if (
          scrollPos >= el.offsetTop &&
          scrollPos < el.offsetTop + el.offsetHeight
        ) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={theme}>
      <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
        <NavContainer active={active} theme={theme} setTheme={setTheme} />

        <main>
          <section id="about">
            <Hero />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
