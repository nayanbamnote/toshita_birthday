'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Camera } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black/30 backdrop-blur-sm border-t border-white/10 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <motion.a
              href="https://www.instagram.com/toshita_bamnote.10/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-white/70 hover:text-pink-400 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.snapchat.com/add/toshitabamnote"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-white/70 hover:text-yellow-400 transition-colors"
            >
              <Camera className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Footer Text */}
          <div className="text-center space-y-2">
            <p className="text-white/60 text-sm font-light">
              "Sagde loka tatta basaa"
            </p>
            <p className="text-white/40 text-xs">
              Made with ❤️ by your brother • © {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

