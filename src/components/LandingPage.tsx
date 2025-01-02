'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  const [showContent, setShowContent] = useState(false)

  return (
    <section className="h-screen flex flex-col items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold text-white mb-8"
      >
        Toshita
      </motion.div>
      <Button
        variant="outline"
        size="lg"
        onClick={() => setShowContent(true)}
        className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors duration-300"
      >
        Enter My World
      </Button>
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div className="text-white text-2xl">Welcome to Toshita's magical world!</div>
        </motion.div>
      )}
      <div className="absolute top-4 right-4 w-16 h-16 bg-yellow-200 rounded-full shadow-lg"></div>
    </section>
  )
}

