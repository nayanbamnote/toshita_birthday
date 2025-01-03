'use client'

import React, { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/ui/section-wrapper"

interface Wish {
  id: string
  message: string
  name: string
  createdAt: string
}

export default function MessageWall() {
  const [wishes, setWishes] = useState<Wish[]>([])
  const [newWish, setNewWish] = useState({ message: '', name: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Fetch wishes when component mounts
  useEffect(() => {
    fetchWishes()
  }, [])

  const fetchWishes = async () => {
    try {
      const response = await fetch('/api/wishes')
      const data = await response.json()
      if (!response.ok) throw new Error(data.error)
      setWishes(data)
    } catch (error) {
      console.error('Error fetching wishes:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newWish.message || !newWish.name || isSubmitting) return

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/wishes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newWish),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.error)

      // Add new wish to the list and reset form
      setWishes([data, ...wishes])
      setNewWish({ message: '', name: '' })
    } catch (error) {
      console.error('Error creating wish:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <SectionWrapper title="Message Wall" id="messages">
      <div className=" z-[6]">
        <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {wishes.map((wish) => (
            <div 
              key={wish.id} 
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
            disabled={isSubmitting}
          />
          <Input
            type="text"
            placeholder="Your name"
            value={newWish.name}
            onChange={(e) => setNewWish({ ...newWish, name: e.target.value })}
            className="mb-4 bg-black/30 border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:ring-white/40"
            disabled={isSubmitting}
          />
          <Button 
            type="submit" 
            className="w-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-300 ease-in-out transform hover:scale-105 backdrop-blur-sm border border-white/20"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Wish'}
          </Button>
        </form>
      </div>
    </SectionWrapper>
  )
}

