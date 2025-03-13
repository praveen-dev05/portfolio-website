
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0d1b2a] text-white py-8 relative">
      {/* Floating Animated Background */}
      <div className="absolute inset-0 bg-cover bg-fixed opacity-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl font-bold mb-4 text-teal-400">Contact Me</h2>
        <p className="text-gray-400 mb-6">
          Let's connect! Feel free to reach out for collaborations or just a friendly chat.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <motion.a
            href="mailto:praveenpalthy@gmail.com"
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="text-gray-400 hover:text-teal-400 text-3xl transition-all duration-300"
          >
            <FaEnvelope />
          </motion.a>
          <motion.a
            href="https://github.com/praveen-dev05"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="text-gray-400 hover:text-teal-400 text-3xl transition-all duration-300"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/palthy-praveen-a2658a349"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="text-gray-400 hover:text-teal-400 text-3xl transition-all duration-300"
          >
            <FaLinkedin />
          </motion.a>
        </div>

        {/* Copyright Text */}
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} <span className="text-teal-400 font-semibold">Palthy Praveen</span>. All
          rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
