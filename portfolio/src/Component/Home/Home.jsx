import React from "react";
import avatarImg from "../../assets/profile.png";
import TextChange from "../TextChange";
import ThreeDBackground from "./ThreeDBackground";

const Home = () => {
  return (
    <div className="relative text-white flex flex-col lg:flex-row w-full justify-between items-start p-10 lg:p-20 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-40">
        <ThreeDBackground />
      </div>
      
      {/* Content */}
      <div className="relative z-10 lg:w-2/4 lg:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl pt-8 tracking-tight drop-shadow-lg">
      Frontend Developer passionate about clean UI, smooth UX, and modern web tech. Skilled in React.js, Tailwind, and building real-world responsive apps.
        </p>
       <a href="#Footer">
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-110 font-semibold rounded-3xl bg-[#465697] shadow-lg hover:shadow-[0_0_20px_rgba(70,86,151,0.5)] transition-all">
          Contact Me
        </button>
        </a>
      </div>
      <div className="relative z-10 group">
        {/* Animated glow ring */}
        <div className="absolute -inset-4 bg-gradient-to-r from-[#465697] via-purple-500 to-[#06b6d4] rounded-full opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-500 animate-pulse"></div>
        
        {/* Rotating border */}
        <div className="absolute -inset-2 bg-gradient-to-r from-[#465697] via-purple-500 to-[#06b6d4] rounded-full animate-spin-slow opacity-75"></div>
        
        {/* Image container */}
        <div className="relative overflow-hidden rounded-full p-2 bg-[#0c0e19]">
          <img 
            className="h-auto w-full lg:w-[400px] mt-5 lg:mt-0 rounded-full drop-shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 ease-in-out" 
            src={avatarImg} 
            alt=""
          />
          
          {/* Overlay shine effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#465697] rounded-full animate-bounce delay-100"></div>
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-1/2 -right-3 w-2 h-2 bg-[#06b6d4] rounded-full animate-bounce delay-500"></div>
      </div>
    </div>
  );
};

export default Home;
