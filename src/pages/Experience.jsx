import React from "react";

const workData = [
  {
    company: "Tata Consultancy Services",
    role: "Assistant System Engineer",
    year: "2025 - Present",
    location: "Bangalore, India",
    responsibility:
      "Worked on developing and maintaining web applications, building RESTful APIs, and collaborating with teams to deliver scalable solutions.",
  },
  {
    company: "JSpiders Training",
    role: "Java Full Stack Trainee",
    year: "2024 - 2025",
    location: "Bangalore, India",
    responsibility:
      "Gained hands-on experience in Java, Spring Boot, React, and SQL by building full-stack applications and improving problem-solving skills.",
  },
];

const Experience = () => {
  return (
    <section className="py-16 bg-background text-foreground">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          <span className="text-blue-500">Experience</span>
        </h2>
        <p className="text-muted-foreground mt-2">My professional journey</p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-border transform -translate-x-1/2"></div>

        {workData.map((item, index) => (
          <div
            key={index}
            className={`mb-10 flex items-center w-full ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Card */}
            <div className="w-[45%] bg-card border border-border rounded-lg p-5 shadow-sm">
              <h3 className="text-lg font-semibold">{item.company}</h3>

              <p className="text-blue-500 text-sm font-medium">{item.role}</p>

              <p className="text-sm text-muted-foreground">{item.year}</p>

              <p className="text-sm text-muted-foreground">{item.location}</p>

              <p className="text-sm text-muted-foreground mt-2">
                {item.responsibility}
              </p>
            </div>

            {/* Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-500 w-4 h-4 rounded-full border-4 border-background"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
