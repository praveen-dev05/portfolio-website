
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 bg-[#0d1b2a] text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src="/assets/praveen.jpg"
            alt="praveen.jpg"
            className="w-64 h-64 object-cover rounded-full border-4 border-teal-400 shadow-lg transform hover:scale-105 transition-all duration-300"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold mb-4 text-teal-400">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a passionate <span className="text-teal-400 font-semibold">Full Stack Developer</span>with a strong foundation in both front-end and 
            back-end technologies. I enjoy solving complex problems,optimizing performance, and building scalable solutions that enhance user experiences.
            My expertise spans across developing dynamic web applications, designing robust backend systems, and working with databases to ensure seamless data management. With a keen eye for detail and a continuous learning mindset, I strive to create efficient, high-quality software solutions that align with modern industry standards. Whether it's architecting APIs, managing databases, or crafting responsive user interfaces, I take pride in delivering well-structured and maintainable code.
          </p>
          <p className="text-lg text-gray-500 mt-4">
          My journey started with a curiosity for development, and now I'm continuously learning and pushing my boundaries to build innovative projects. I focus on both front-end
          and back-end development, ensuring seamless integration between user interfaces and robust backend systems to create efficient and scalable applications.
          </p>

          {/* Button */}
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.1 }}
            className="mt-6 inline-block bg-teal-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 hover:bg-teal-400"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
