
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaArrowDown } from "react-icons/fa";
import prabhuImage from "../assets/prabhu.jpg"

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center h-screen text-white"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${prabhuImage})`,
          filter: "brightness(40%) blur(2px)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold text-teal-400 mb-4 drop-shadow-xl"
        >
          Hello, I'm <span className="text-white">Palthy Praveen</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-2xl md:text-3xl font-semibold text-gray-300"
        >
          <TypeAnimation
            sequence={[
              "Full Stack Developer 🚀",
              2000,
              "Creative Designer 🎨",
              2000,
              "Problem Solver 🔥",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-teal-300"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-6 text-gray-300 text-lg"
        >
          I specialize in building interactive, stunning, and high-performance
          websites. Let's work together to bring your vision to life!
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-110"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-transparent border border-teal-400 text-teal-400 font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:bg-teal-400 hover:text-white hover:scale-110"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Animated Down Arrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="mt-12 text-3xl text-teal-400"
        >
          <FaArrowDown />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
