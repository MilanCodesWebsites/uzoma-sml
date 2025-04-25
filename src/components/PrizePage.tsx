import React from 'react';
import { motion } from 'framer-motion';
import WhatsAppButton from './WhatsAppButton';
import { Prize } from '../types/prize';
import { Trees as TreasureChest } from 'lucide-react';

const PrizePage: React.FC<Prize> = ({ 
  number, 
  prize, 
  code, 
  imageUrl 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-md w-full bg-gradient-to-b from-yellow-50/90 to-amber-50/90 backdrop-blur-sm rounded-lg shadow-2xl overflow-hidden border-2 border-yellow-600/30"
    >
      <div className="relative">
        {/* Decorative header */}
        <div className="bg-gradient-to-r from-yellow-600 to-amber-600 h-8 w-full"></div>
        
        {/* Main content */}
        <div className="p-6 md:p-8">
          {/* Winner header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-6"
          >
            <h1 className="text-2xl md:text-3xl font-pirate text-yellow-800 mb-2">
              Congratulations, you're Uzoma's {getOrdinal(number)} winner!
            </h1>
            <h2 className="text-xl md:text-2xl font-handwritten text-yellow-700">
              You've discovered a hidden treasure!
            </h2>
          </motion.div>
          
          {/* Prize image */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 opacity-75 blur-sm animate-pulse"></div>
              <div className="relative bg-white rounded-lg p-4 shadow-md">
                <img 
                  src={imageUrl} 
                  alt={`${prize} prize`} 
                  className="h-40 md:h-48 object-contain mx-auto"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Prize code */}
          <motion.div
            initial={{ opacity: 0, rotateZ: -5 }}
            animate={{ opacity: 1, rotateZ: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mb-6"
          >
            <div className="relative mx-auto max-w-xs bg-gradient-to-br from-yellow-100 to-amber-100 p-4 rounded-lg border-2 border-yellow-600/30 shadow-md transform rotate-1">
              <div className="text-center">
                <p className="text-yellow-800 font-handwritten mb-2">Your Unique Prize Code:</p>
                <div className="relative inline-block">
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-md blur opacity-30 animate-pulse"></div>
                  <p className="relative bg-yellow-50 px-4 py-2 rounded border border-yellow-600/40 font-pirate text-xl md:text-2xl text-yellow-900">
                    {code}
                  </p>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 bg-gradient-to-br from-yellow-500 to-amber-600 h-10 w-10 rounded-full flex items-center justify-center shadow-lg transform rotate-12">
                <TreasureChest className="h-6 w-6 text-yellow-100" />
              </div>
            </div>
          </motion.div>
          
          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-center mb-8"
          >
            <p className="text-yellow-900 mb-4">
              To claim your treasure, send the prize image and this code to our WhatsApp number: <br />
              <span className="font-semibold">+2348109460948</span>
            </p>
            
            <WhatsAppButton prize={prize} code={code} />
          </motion.div>
          
          {/* Warning */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="bg-red-100 border-l-4 border-red-600 p-4 rounded"
          >
            <p className="text-red-800 font-semibold text-center">
              Tear down the QR code poster now so no one else can steal your treasure!
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Helper function to get ordinal suffix
const getOrdinal = (n: number): string => {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
};

export default PrizePage;