import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ecommerce from "../../assets/doctor.png";
import HRMS from "../../assets/hrm.jpg";
import Kanno from "../../assets/Kidney.png";
import fintech from "../../assets/fintech.png";
import SKG from "../../assets/skg.png";

const Projects = () => {

  const [showAll, setShowAll] = useState(false);

  const projects = [
     {
      title: "SKG Enterprise",
      main: "Designed and built a professional website for SKG Enterprise to enhance their online presence and effectively present their offerings to customers.",
      link: "https://skgenterprise.com/",
      img: SKG,
    },
    {
      title: "PNSD Infection",
      main: "Developed a responsive healthcare service website using HTML, CSS, JavaScript, and React. Designed a modern UI to showcase home injection services and appointment booking.",
      link: "https://pnsd.in/",
      img: ecommerce,
    },
    {
      title: "Kanno Health Care",
      main: "Responsive healthcare website focused on kidney care services with doctor information, treatments, and easy appointment booking.",
      link: "https://kannohealth.com/",
      img: Kanno,
    },
    
    
    {
      title: "Fintech Project",
      main: "Built a responsive fintech web application UI with React for financial dashboards and transaction management.",
      link: "https://biznext-edoq.vercel.app/",
      img: fintech,
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div id="Projects" className="px-5 py-10 md:p-24 text-white">
      
      <h1 className="text-2xl md:text-4xl text-center font-bold">
        Projects
      </h1>

      <div className="py-12 xl:px-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            main={project.main}
            link={project.link}
            img={project.img}
          />
        ))}
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>

    </div>
  );
};

export default Projects;