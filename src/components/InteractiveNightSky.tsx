'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const stars = [
  { id: 1, x: '20%', y: '30%', fact: 'Toshita loves stargazing' },
  { id: 2, x: '50%', y: '20%', fact: 'Her favorite constellation is Orion' },
  { id: 3, x: '80%', y: '40%', fact: 'She dreams of becoming an astronomer' },
  { id: 4, x: '30%', y: '70%', fact: 'Toshita can name over 50 stars' },
  { id: 5, x: '70%', y: '60%', fact: 'She has her own telescope' },
]

export default function InteractiveNightSky() {
  const [selectedFact, setSelectedFact] = useState('')

  return (
    <section className="min-h-screen relative">
      <h2 className="text-3xl font-bold text-white mb-8 text-center pt-8">Interactive Night Sky</h2>
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute w-4 h-4 bg-yellow-200 rounded-full cursor-pointer"
            style={{ left: star.x, top: star.y }}
            whileHover={{ scale: 1.5 }}
            onClick={() => setSelectedFact(star.fact)}
          />
        ))}
      </div>
      {selectedFact && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-4 rounded-lg">
          {selectedFact}
        </div>
      )}
    </section>
  )
}

