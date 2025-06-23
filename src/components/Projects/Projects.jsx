import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "This modern and interactive portfolio is built using React.js, Tailwind CSS, and Framer Motion, featuring a sleek and dynamic UI with smooth animations and responsive design.",
    image: "./assets/praveenp.jpg", 
    link: "https://github.com/praveen-dev05",
  },
  {
    title: "To-Do List",
    description:
      "Developed a To-Do List Application using React.js, Framer Motion, and CSS, featuring task management with add, edit, delete, and complete functionalities.",
    image: "./assets/praveenn.jpg",
    link: "https://github.com/praveen-dev05",
  },
  {
    title: "Weather App",
    description:
      "This Weather App is a modern and interactive application built using React.js and CSS, designed to provide real-time weather updates.",
    image: "./assets/weather.jpg",
    link: "https://github.com/praveen-dev05",
  },
  {
    title: "Rental System",
    description:
      "Built a full-stack rental system using Spring Boot, Java, JPA, and React.js with JWT-based authentication and role-based access control. Integrated secure RESTful APIs, dynamic CORS configuration, and persistent session handling using React Context API and LocalStorage.",
    image: "./assets/rentalsystem.jpg",
    link: "https://github.com/praveen-dev05",
  },
  {
    title: "E-commerce",
    description:
      "Developed a full-stack E-commerce app using React.js and Spring Boot, featuring product display, add-to-cart functionality, secure REST APIs, and MySQL integration with a clean, responsive user interface.",
    image: "./assets/ecommerce.jpg",
    link: "https://github.com/praveen-dev05",
  },
];

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="py-16 bg-[#1b263b] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center text-teal-400 mb-12"
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="relative bg-[#0d1b2a] shadow-lg rounded-xl overflow-hidden transform transition-all duration-500"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-56 object-cover transition-transform duration-300 ${
                  hovered === index ? "scale-105" : "scale-100"
                }`}
              />

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 transition-opacity duration-300"
                animate={{ opacity: hovered === index ? 1 : 0 }}
              >
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-300 text-sm text-center mt-2">
                  {project.description}
                </p>

                {/* View Project Button */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="mt-4 bg-teal-500 px-4 py-2 rounded-md text-white font-semibold transition-all duration-300 hover:bg-teal-400 hover:underline"
                >
                  View Project
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
