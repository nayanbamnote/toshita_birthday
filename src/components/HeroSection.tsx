'use client'

import { motion } from 'framer-motion'
import { TextGenerateEffect } from './ui/text-generate-effect'
import confetti from 'canvas-confetti'

export default function HeroSection() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-8">
        <motion.h1 
          className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white/80 to-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Happy Birthday Toshita!
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <TextGenerateEffect 
            words="Celebrating another amazing year of you! 🎉"
            className="text-2xl text-white/90"
          />
        </motion.div>

        <motion.button
          className="px-8 py-4 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
          onClick={triggerConfetti}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Click for Magic! ✨
        </motion.button>
      </div>
    </section>
  )
} 