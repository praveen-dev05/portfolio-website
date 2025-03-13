
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "B.Tech",
    institution: "Vidya Jyothi Institute Of Technology",
    year: "2019 - 2023",
    branch: "Computer Science Engineering",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Sri Chaitanya Junior College",
    year: "2017 - 2019",
    branch: "MPC",
  },
  {
    degree: "Secondary Education",
    institution: "Rainbow High School",
    year: "2016 - 2017",
    branch: "SSC",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 bg-[#1b263b] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center text-teal-400 mb-12"
        >
          My Education
        </motion.h2>

        <div className="space-y-10">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              className="relative bg-[#0d1b2a] p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-teal-400"
            >
              <div className="absolute -top-6 left-6 text-teal-400 text-3xl">
                <FaGraduationCap />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{edu.degree}</h3>
              <p className="text-gray-400">{edu.institution} | {edu.year}</p>
              <p className="text-gray-300 mt-2">{edu.branch}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
