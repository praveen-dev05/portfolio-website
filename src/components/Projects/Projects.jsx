import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "This modern and interactive portfolio is built using React.js, Tailwind CSS, and Framer Motion, featuring a sleek and dynamic UI with smooth animations and responsive design. It offers an immersive user experience with visually appealing elements, hover effects, and seamless navigation.",
    image: "./assets/praveenp.jpg", 
    link: "https://github.com/praveen-dev05",

  },
  {
    title: "TODo List",
    description: "Developed a To-Do List Application using React.js, Framer Motion, and CSS, featuring task management with add, edit, delete, and complete functionalities. Implemented state management with React Hooks (useState) to handle tasks, filtering options (All, Completed, Pending), and success messages. Integrated Framer Motion animations for smooth UI interactions, including title animations, hover effects, and task transitions. Designed a modern dark-themed UI with responsive styling, hover effects, and interactive buttons for an enhanced user experience. The application ensures real-time task updates, inline editing, timestamp tracking, and filter-based task display, providing a seamless and efficient task management experience.",
    image: "./assets/praveenn.jpg",
    link: "https://github.com/praveen-dev05",
  },
  {
    title: "Weather App",
    description:
     "This Weather App is a modern and interactive application built using React.js and CSS, designed to provide real-time weather updates. It allows users to search for any city worldwide and instantly retrieve weather conditions, including temperature, humidity, and wind speed. The application integrates the OpenWeather API to fetch accurate data and dynamically updates the UI based on weather conditions.The design features a sleek, user-friendly interface with smooth animations, interactive hover effects, and visually appealing transitions. The responsive layout ensures seamless accessibility across different devices. With this application, we can see the weather all over the world, making it a useful tool for tracking real-time weather updates effortlessly.",
    image: "./assets/weather.jpg",
    link: "https://github.com/praveen-dev05",
  },
];

const Projects = () => {
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0d1b2a] shadow-lg rounded-xl overflow-hidden transform transition-all duration-500 hover:shadow-teal-400"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 text-lg font-semibold text-white bg-teal-500 rounded-full transition-transform duration-300 hover:scale-105 hover:bg-teal-400"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
