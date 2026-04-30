import React from "react";
import { ExternalLink } from "lucide-react";


const ProjectCard = ({ title, main, link , img}) => {
  return (
    <div className="group relative overflow-hidden flex flex-col bg-[#0c0e19] rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 ease-in-out">
      
      <div className="overflow-hidden rounded-t-2xl">
        <img
          className="h-auto md:h-[250px] lg:h-[320px] object-cover w-full transition-transform duration-500 ease-in-out"
          src={img}
          alt="project"
        />
      </div>

      <div className="p-5 flex flex-col justify-between flex-1 h-auto  md:h-[300px] lg:h-[300px]">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
          {title}
        </h3>
        <p className="text-sm text-slate-300 mb-4 leading-relaxed">{main}</p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 self-start bg-gradient-to-r from-[#4a5bbd] to-[#7187ea] text-white text-sm md:text-base font-semibold px-4 py-2 rounded-full hover:brightness-110 hover:scale-105 transition-all duration-300"

        >
          <ExternalLink className="w-4 h-4" />
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
