
import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiSpringboot, SiMysql } from "react-icons/si";
import { DiJava } from "react-icons/di";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React.js", icon: <FaReact className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "Java", icon: <DiJava className="text-red-600" /> },
  { name: "J2EE", icon: <FaJava className="text-orange-500" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
  { name: "Oracle SQL", icon: <SiMysql className="text-blue-600" /> },
];

const Skill = () => {
  return (
    <section id="skill" className="py-16 bg-[#1b268b] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center bg-[#0d1b2a] p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-2xl"
            >
              <div className="text-5xl">{skill.icon}</div>
              <p className="text-lg font-semibold mt-4">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
