import React from "react";

const skillsData = [
  {
    title: "Programming Languages",
    skills: ["Java", "JavaScript"],
  },
  {
    title: "Frontend Technologies",
    skills: ["HTML", "CSS", "React"],
  },
  {
    title: "Backend Technologies",
    skills: ["Spring Boot"],
  },
  {
    title: "Database",
    skills: ["Oracle SQL", "PostgreSQL", "HQL"],
  },
];

const Skills = () => {
  return (
    <section className="py-16 bg-background text-foreground">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          My <span className="text-blue-500">Skills</span>
        </h2>
        <p className="text-muted-foreground mt-2">Technologies I work with</p>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto px-6 grid sm:grid-cols-2 gap-6">
        {skillsData.map((category, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-lg p-6 shadow-sm"
          >
            {/* Blue Heading */}
            <h3 className="text-lg font-semibold mb-4 text-blue-500">
              {category.title}
            </h3>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-muted text-foreground rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
