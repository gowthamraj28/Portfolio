import React from "react";

const educationData = [
  {
    title: "Kongu Engineering College",
    subtitle: "B.E Automobile Engineering",
    year: "2021 - 2025",
    location: "Perundurai, Tamil Nadu",
  },
  {
    title: "J.K.K. Nattraja Matric Hr. Sec. School",
    subtitle: "HSC",
    year: "2020 - 2021",
    location: "Komaraplayam, Tamil Nadu",
  },
  {
    title: "J.K.K. Nattraja Matric Hr. Sec. School",
    subtitle: "SSLC",
    year: "2018 - 2019",
    location: "Komarapalayam, Tamil Nadu",
  },
];

const Education = () => {
  return (
    <section className="py-16 bg-background text-foreground">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          <span className="text-blue-500">Education</span>
        </h2>
        <p className="text-muted-foreground mt-2">My academic journey</p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-border transform -translate-x-1/2"></div>

        {educationData.map((item, index) => (
          <div
            key={index}
            className={`mb-10 flex items-center w-full ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Card */}
            <div className="w-[45%] bg-card border border-border rounded-lg p-5 shadow-sm">
              <h3 className="text-lg font-semibold">{item.title}</h3>

              <p className="text-blue-500 text-sm font-medium">
                {item.subtitle}
              </p>

              <p className="text-sm text-muted-foreground">{item.year}</p>

              <p className="text-sm text-muted-foreground">{item.location}</p>
            </div>

            {/* Circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-500 w-4 h-4 rounded-full border-4 border-background"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
