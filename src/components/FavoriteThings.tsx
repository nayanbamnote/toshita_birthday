'use client'

import { motion } from 'framer-motion'
import { Book, Music, Camera } from 'lucide-react'

const favorites = [
  { icon: Book, label: 'Fantasy Novels' },
  { icon: Music, label: 'Classical Music' },
  { icon: Camera, label: 'Photography' },
]

export default function FavoriteThings() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Toshita's Favorite Things</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {favorites.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
            >
              <item.icon className="text-white w-16 h-16 mb-4" />
              <p className="text-white text-lg">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

