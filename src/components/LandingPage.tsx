'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FloatingPartyButtons from './FloatingPartyButtons';
import { TextGenerateEffect } from './ui/text-generate-effect';


const LandingPage = () => {
  const [isGiftOpen, setIsGiftOpen] = useState(false);
  const [sparklePositions, setSparklePositions] = useState<Array<{ left: string; top: string }>>([]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { 
      y: -20,
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { 
      y: 20,
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
 
  // Initialize sparkle positions on client-side only
  useEffect(() => {
    const positions = [...Array(30)].map(() => ({
      left: Math.random() * 100 + '%',
      top: Math.random() * 100 + '%',
    }));
    setSparklePositions(positions);
  }, []);
  const handleOpenGift = () => {
    setIsGiftOpen(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <AnimatePresence mode="wait">
        {!isGiftOpen ? (
          <motion.div
            key="gift"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="text-center space-y-8"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[100px] mb-8"
            >
              🎁
            </motion.div>
            <Button
              onClick={handleOpenGift}
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-6 rounded-full text-xl transform hover:scale-105 transition-all"
            >
              <Gift className="w-6 h-6 mr-2" />
              Open Your Gift!
            </Button>
          </motion.div>
        ) : (
          <motion.div
          className="text-center space-y-8 max-w-4xl relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 filter"
            variants={titleVariants}
          >
            Happy Birthday Toshita!
          </motion.h1>
          
          <motion.div 
            className="text-2xl text-white/90"
            variants={subtitleVariants}
          >
            🌟 To the most amazing sister in the world!
          </motion.div>
          
          <FloatingPartyButtons />
        </motion.div>
        )}
      </AnimatePresence>
      {/* Floating elements */}
      <div className="fixed inset-0 pointer-events-none">
        {sparklePositions.map((position, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={position}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Sparkles className="text-white opacity-50" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default LandingPage;