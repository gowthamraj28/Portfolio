import React from "react";
import { FaGithub } from "react-icons/fa";
import Button from "../components/NavComponents/Button";

const projectData = [
  {
    title: "Food Order Management System",
    img: "projects/FOM_Home.jpeg",
    description:
      "Built a Java Full Stack Food Order Management System enabling users to browse restaurants, view menus, and place orders through a responsive UI.Developed REST APIs for authentication and CRUD operations on restaurants, menus, and orders to ensure efficient and scalable backend communication.",
    skills: ["Java", "Spring Boot", "React", "PostgreSQL"],
    github: "https://github.com/gowthamraj28/Food-Order-Management-System",
  },
  {
    title: "Expenditure Tracker",
    img: "projects/ET_Login.jpeg",
    description:
      "Developed an Expenditure Tracker application with user registration and login for secure access and personalized expense management.Implemented CRUD operations for expenses along with PDF report generation to help users track and export their spending data easily.",
    skills: ["JDBC", "Servlet", "HTML", "CSS", "JavaScript", "MYSQL"],
    github: "https://github.com/gowthamraj28/Expenditure_tracker",
  },
];

const Projects = () => {
  return (
    <section className="py-16 bg-background text-foreground">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          My <span className="text-blue-500">Projects</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 gap-8">
        {projectData.map((el, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            {/* Image */}
            <img
              src={el.img}
              alt={el.title}
              className="w-full h-48 object-cover border-b border-border"
            />

            {/* Content */}
            <div className="p-5 space-y-4">
              <h3 className="text-lg font-semibold">{el.title}</h3>

              <p className="text-sm text-muted-foreground">{el.description}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {el.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* GitHub Button */}
              <div className="pt-3">
                <a
                  href={el.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-white hover:bg-gray-800 transition text-sm"
                >
                  <FaGithub size={18} />
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
