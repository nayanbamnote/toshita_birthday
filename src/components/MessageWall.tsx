'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const initialMessages = [
  "Happy birthday, test! You're amazing!",
  "Wishing you a year full of starry nights and magical moments!",
  "May your dreams be as vast as the night sky!",
]

export default function MessageWall() {
  const [messages, setMessages] = useState(initialMessages)
  const [newMessage, setNewMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      setMessages([...messages, newMessage])
      setNewMessage('')
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Message Wall</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 p-4 rounded-lg"
            >
              <p className="text-white">{message}</p>
            </motion.div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="mt-8">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Leave a birthday wish..."
            className="w-full p-2 rounded-lg bg-gray-700 text-white"
          />
          <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
            Send Wish
          </button>
        </form>
      </div>
    </section>
  )
}

