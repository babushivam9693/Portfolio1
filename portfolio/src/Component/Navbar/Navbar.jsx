import React, { useState } from "react";
import { RiMenu2Line, RiCloseLine, RiDownloadLine } from "@remixicon/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 left-0  z-50 backdrop-blur-md bg-black/40 shadow-lg">
      <div className="flex justify-between items-center px-6 lg:px-20 py-7 text-white font-medium text-[17px] lg:text-[18px]">
       <h1
  className="text-3xl lg:text-4xl font-bold tracking-wide bg-gradient-to-r from-blue-400 via-violet-500 to-indigo-500 bg-clip-text text-transparent animate-fadeInUp"
>
  Frontend Developer
</h1>
        <ul className="hidden lg:flex gap-10 items-center font-semibold">
          {["About", "Experience", "Projects", "Contact"].map((item) => (
            <li key={item}>
               <a
        href={item === "Contact" ? "#Footer" : `#${item}`}
        className="hover:text-purple-400 transition duration-300"
      >
        {item}
      </a>
            </li>
          ))}
          <li>
            <a
              href="/public/Lovely_Supriya_Resume_2026-03-10.pdf"
              download
              className="flex items-center gap-2 px-5 py-1.5 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition"
            >
              <RiDownloadLine size={18} /> Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <RiCloseLine size={30} /> : <RiMenu2Line size={30} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
    
<div
  className={`lg:hidden fixed top-0 left-0 h-screen w-64 bg-black text-white p-6 text-lg font-semibold z-50 transform transition-transform duration-300 shadow-lg ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  <ul className="flex flex-col gap-6 mt-2">
    {["About", "Experience", "Projects", "Contact"].map((item) => (
      <li key={item}>
        <a
          href={item === "Contact" ? "#Footer" : `#${item}`}
          onClick={toggleMenu}
          className="hover:text-pink-500 transition duration-300"
        >
          {item}
        </a>
      </li>
    ))}
    <li>
      <a
        href="/resume.pdf"
        download
        onClick={toggleMenu}
        className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full hover:bg-gray-800 transition"
      >
        <RiDownloadLine size={18} /> Resume
      </a>
    </li>
  </ul>
</div>

    </nav>
  );
};

export default Navbar;
