"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      {/* Stars background */}
      <div className="absolute inset-0 stars opacity-50" />
      
      {/* Loading animation */}
      <div className="relative z-10">
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated star */}
          <motion.div
            className="w-16 h-16 mb-4"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-full h-full text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              />
            </svg>
          </motion.div>
          
          {/* Loading text */}
          <motion.p 
            className="text-white text-lg font-medium"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Loading magic...
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}; 