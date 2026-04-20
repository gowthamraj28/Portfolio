import React from "react";
import Button from "../components/NavComponents/Button";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Column */}
        <div className="space-y-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
            Hi, I am{" "}
            <span className="text-blue-500 dark:text-blue-400">
              Gowtham Raj
            </span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            I am an aspiring Java Full Stack Developer with a strong interest in
            technology and a continuous drive to learn and improve. I enjoy
            building web applications and exploring how systems work end-to-end,
            with a focus on writing clean, efficient, and maintainable code. I’m
            passionate about solving real-world problems and constantly
            expanding my knowledge in modern development practices
          </p>

          {/* Optional Button */}
          <div className="pt-2 flex gap-4">
            <Button size="default">
              <a
                href="https://drive.google.com/file/d/1DxPwxiDCFH8KZck-rfBFmgi5xd306UMX/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Resume
              </a>
            </Button>
            <Button size="default">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="pt-2 flex gap-4 items-center">
            <a
              href="https://www.linkedin.com/in/gowtham-raj-s-660a5324b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://github.com/gowthamraj28"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://leetcode.com/u/gowtham_raj_28/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <SiLeetcode size={22}></SiLeetcode>
            </a>
            {/* <a
              href="https://www.instagram.com/gowtham_raj_28/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaInstagram size={22} />
            </a> */}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="projects/BoyImage.png"
            alt="Profile"
            className="w-64 sm:w-72 md:w-80 lg:w-86 h-auto object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
