import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-yellow-800/80 to-amber-800/80 backdrop-blur-sm text-yellow-100 p-4 shadow-lg relative z-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="text-center md:text-left"
          >
            This competition is hosted by UzomaSML and OC Imports.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="text-center md:text-right"
          >
            <span>Built by </span>
            <a 
              href="https://onrooleyy.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium underline decoration-dotted hover:text-yellow-300 transition-colors duration-300"
            >
              Prince
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
