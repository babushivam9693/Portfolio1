import React from "react";
import AboutImg from "../../assets/profile.png";

const About = () => {
  return (
    <section
      id="About"
      className="bg-gradient-to-br from-black via-gray-900 to-black px-6 py-16 md:px-20 text-white"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src={AboutImg}
            alt="About"
            className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full border-4 border-gray-700 shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1">
          <p className="text-gray-300 mb-8 text-sm md:text-base leading-relaxed">
            I’m a front-end developer passionate about building clean, responsive, and user-friendly web interfaces.
            My goal is to craft seamless digital experiences that are both visually engaging and highly performant.
            I love staying up-to-date with the latest tech trends and continuously improving my skills to create impactful and accessible websites.
          </p>

          {/* Info Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Languages Card */}
            <div className="bg-blue bg-opacity-5 backdrop-blur-md border border-white/10 rounded-xl p-5 shadow-lg hover:scale-[1.03] transition duration-300">
              <h3 className="text-lg font-semibold mb-3 border-b border-gray-600 pb-1">Languages</h3>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                <li>HTML & CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Tailwind CSS</li>
                <li>Wordpress</li>
              </ul>
            </div>

            {/* Education Card */}
            <div className="bg-blue bg-opacity-5 backdrop-blur-md border border-white/10 rounded-xl p-5 shadow-lg hover:scale-[1.03] transition duration-300">
              <h3 className="text-lg font-semibold mb-3 border-b border-gray-600 pb-1">Education</h3>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                <li>B.Sc in Information Technology</li>
                <li>MCA – Master of Computer Applications</li>
              </ul>
            </div>

            {/* Projects Card */}
            <div className="bg-blue bg-opacity-5 backdrop-blur-md border border-white/10 rounded-xl p-5 shadow-lg hover:scale-[1.03] transition duration-300">
              <h3 className="text-lg font-semibold mb-3 border-b border-gray-600 pb-1">Projects</h3>
              <p className="text-sm text-gray-300">Built 4+ real-world projects focused on performance, responsiveness, and UI/UX.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
