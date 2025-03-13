
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-[#4e54c8] via-[#6a11cb] to-[#2575fc] shadow-lg"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white"
        >
          <Link to="home" smooth={true} duration={300} className="cursor-pointer">
            MyPortfolio
          </Link>
        </motion.div>

        <div className="hidden md:flex space-x-6 text-lg">
          {['Home', 'About', 'Education', 'Skill', 'Projects', 'Contact'].map((item, index) => (
            <Link
              key={index}
              to={item.toLowerCase()}
              smooth={true}
              duration={300}
              className="cursor-pointer text-gray-300 hover:text-white transition duration-300"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="md:hidden bg-[#1b263b] absolute top-full left-0 w-full p-5 space-y-4 text-center"
        >
          {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map((item, index) => (
            <Link
              key={index}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="block text-gray-300 hover:text-white transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
