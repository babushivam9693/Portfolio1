import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer
      id="Footer"
      className="bg-[#465697] text-white py-10 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        {/* Contact Heading */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">Contact</h1>
          <p className="text-base md:text-xl text-white/90">
            Feel free to reach out!
          </p>
        </div>

        {/* Contact Details */}
        <ul className="space-y-4 text-base md:text-lg">
          <li className="flex items-center gap-3 hover:text-yellow-300 transition-colors">
            <FiPhone size={22} />
            <a
              href="tel:+916209760945"
              className="underline-offset-2 hover:underline"
            >
              +91 9693137992
            </a>
          </li>

          <li className="flex items-center gap-3 hover:text-yellow-300 transition-colors">
            <MdOutlineEmail size={22} />
            <a
              href="mailto:supriyalovely0306@gmail.com"
              className="underline-offset-2 hover:underline"
            >
              babushivakumar09@gmail.com
            </a>
          </li>

          <li className="flex items-center gap-3 hover:text-yellow-300 transition-colors">
            <CiLinkedin size={22} />
            <a
              href="https://www.linkedin.com/in/shivam-singh-a7142a2b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:underline"
            >
              LinkedIn
            </a>
          </li>

          <li className="flex items-center gap-3 hover:text-yellow-300 transition-colors">
            <FaGithub size={22} />
            <a
              href="https://github.com/babushivam9693"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:underline"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Shivam singh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
