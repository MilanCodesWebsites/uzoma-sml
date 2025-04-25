import React from 'react';
import { motion } from 'framer-motion';
import { Map as TreasureMap, Compass } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl w-full mx-auto px-4"
    >
      <div className="bg-gradient-to-b from-yellow-50/90 to-amber-50/90 backdrop-blur-sm rounded-xl shadow-2xl border-2 border-yellow-600/30 overflow-hidden">
        {/* Header decoration */}
        <div className="bg-gradient-to-r from-yellow-600 to-amber-600 h-3"></div>
        
        {/* Content */}
        <div className="p-6 md:p-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <div className="flex justify-center mb-4">
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Compass className="w-16 h-16 text-yellow-600/30" />
                </motion.div>
                <TreasureMap className="w-16 h-16 text-yellow-800" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-pirate text-yellow-800 mb-4">
              Uzoma's Treasure Hunt
            </h1>
            <p className="text-xl md:text-2xl font-handwritten text-yellow-700">
              Find Hidden QR Codes, Win Amazing Prizes!
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6 text-center mb-8"
          >
            <div className="bg-gradient-to-br from-yellow-100 to-amber-100 p-6 rounded-lg border-2 border-yellow-600/30 shadow-md">
              <h2 className="text-2xl font-pirate text-yellow-800 mb-4">How to Play</h2>
              <ul className="space-y-4 text-yellow-900">
                <li className="flex items-center justify-center gap-2">
                  <span className="w-8 h-8 flex items-center justify-center bg-yellow-600 text-yellow-100 rounded-full font-bold">1</span>
                  <span>Find QR codes hidden around the venue</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="w-8 h-8 flex items-center justify-center bg-yellow-600 text-yellow-100 rounded-full font-bold">2</span>
                  <span>Scan them to reveal your prize</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="w-8 h-8 flex items-center justify-center bg-yellow-600 text-yellow-100 rounded-full font-bold">3</span>
                  <span>Follow the instructions to claim your treasure!</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center text-yellow-900"
          >
            <p className="font-handwritten text-lg">
              Start searching now and claim your treasure!
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;