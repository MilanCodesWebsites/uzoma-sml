import React from 'react';
import { motion } from 'framer-motion';

interface WhatsAppButtonProps {
  prize: string;
  code: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ prize, code }) => {
  const message = `Hello! I found a ${prize} with the code ${code}!`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/2348109460948?text=${encodedMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
        <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
        <path d="M9.5 13.5a5 5 0 0 0 5 0" />
      </svg>
      <span className="font-medium">Claim via WhatsApp</span>
    </motion.a>
  );
};

export default WhatsAppButton;