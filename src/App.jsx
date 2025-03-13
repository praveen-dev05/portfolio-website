
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './About/About';
import Education from './components/Education';
import Skill from './components/Skill';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 1.2 }}
      className='relative bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#415a77] min-h-screen w-full overflow-hidden text-white'
    >
      <div className='absolute inset-0 bg-[url(/background.jpg)] bg-cover bg-fixed opacity-50'></div>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skill />
      <Projects />
      <Footer />
    </motion.div>
  );
}

export default App;
