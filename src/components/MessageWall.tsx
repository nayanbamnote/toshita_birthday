'use client'

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface Wish {
  message: string
  name: string
}

export default function MessageWall() {
  const [wishes, setWishes] = useState<Wish[]>([])
  const [newWish, setNewWish] = useState({ message: '', name: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newWish.message && newWish.name) {
      setWishes([...wishes, newWish])
      setNewWish({ message: '', name: '' })
    }
  }

  return (
    <div className="relative w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="relative min-h-screen overflow-hidden py-16">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Message Wall</h2>
            
            <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
              {wishes.map((wish, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-float"
                >
                  <p className="mb-4 break-words overflow-hidden overflow-ellipsis">{wish.message}</p>
                  <p className="text-right text-sm italic truncate">- {wish.name}</p>
                </div>
              ))}
            </div>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <Input
                type="text"
                placeholder="Your wish..."
                value={newWish.message}
                onChange={(e) => setNewWish({ ...newWish, message: e.target.value })}
                className="mb-4 bg-black/30 border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:ring-white/40"
              />
              <Input
                type="text"
                placeholder="Your name"
                value={newWish.name}
                onChange={(e) => setNewWish({ ...newWish, name: e.target.value })}
                className="mb-4 bg-black/30 border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:ring-white/40"
              />
              <Button 
                type="submit" 
                className="w-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-300 ease-in-out transform hover:scale-105 backdrop-blur-sm border border-white/20"
              >
                Send Wish
              </Button>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}

