import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="bg-black text-white text-center py-20 h-screen flex flex-col justify-center items-center">
      <motion.h2
        className="text-4xl font-semibold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to my Responsive React Test Web App
      </motion.h2>
      <motion.p
        className="text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        This is a Simple, Responsive App with My Components.
      </motion.p>
    </section>
  );
};

export default Hero;
