import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact, FaWordpress } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const techStack = [
  { icon: <FaHtml5 size={28} color="#e34c26" />, color: "#e34c26", name: "HTML5" },
  { icon: <FaCss3 size={28} color="#1572B6" />, color: "#1572B6", name: "CSS3" },
  { icon: <FaJs size={28} color="#f7df1e" />, color: "#f7df1e", name: "JavaScript" },
  { icon: <FaReact size={28} color="#61DBFB" />, color: "#61DBFB", name: "React" },
  { icon: <FaWordpress size={28} color="#21759B" />, color: "#21759B", name: "WordPress" },
  {
    icon: (
      <img
        src="https://www.svgrepo.com/show/374118/tailwind.svg"
        alt="Tailwind"
        className="w-6 h-6"
      />
    ),
    color: "#38BDF8",
    name: "Tailwind",
  },
  // { icon: <SiNextdotjs size={28} />, color: "#ffffff", name: "Next.js" },
];

const experiences = [
  {
    company: "Harifly Technologies Pvt. Ltd.",
    role: "Frontend Developer",
    duration: "September 2025 – Present",
    points: [
      "Developing scalable UI using React & Next.js",
      "Building SEO-friendly and optimized web pages",
      "API integration and dynamic rendering",
      "Working on live client projects",
    ],
  },
  {
    company: "UXDLAB",
    role: "Frontend Developer (Intern)",
    duration: "6 Months Internship",
    points: [
      "Developed responsive UIs using React & Tailwind",
      "Building SEO-friendly and optimized web pages",
      "Worked with Next.js for fast rendering",
      "Collaborated with backend team for API integration",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="Experience"
      className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-6 md:px-20 py-20"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-20">
        My Experience
      </h1>

      {/* Timeline */}
      <div className="relative border-l border-white/20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-16 ml-6 group">
            
            {/* Timeline Dot */}
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full ring-4 ring-[#24243e]"></span>

            {/* Card */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-purple-500/30 hover:scale-[1.02] ">
              
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                {exp.role}
              </h2>

              <p className="text-blue-300 mt-1 font-medium">
                {exp.company}
              </p>

              <p className="text-gray-400 text-sm mt-1">
                {exp.duration}
              </p>

              <ul className="mt-5 space-y-2 text-gray-300 text-sm md:text-base list-disc pl-5">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <h3 className="text-white text-3xl font-semibold text-center mt-20 mb-10">
        Tech Stack
      </h3>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-8 place-items-center max-w-5xl mx-auto">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center group transition-transform duration-300 hover:scale-110"
          >
            <div
              className="p-5 rounded-2xl bg-[#1f1f1f] shadow-xl transition-all duration-500"
              style={{
                boxShadow: `0 0 20px ${tech.color}`,
              }}
            >
              {tech.icon}
            </div>
            <p className="mt-3 text-white text-sm">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
