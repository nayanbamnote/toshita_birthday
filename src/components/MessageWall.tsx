'use client'

import React, { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { toast } from "sonner"

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
  const [isLoading, setIsLoading] = useState(true)

  // Fetch wishes when component mounts
  useEffect(() => {
    fetchWishes()
  }, [])

  const fetchWishes = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/wishes')
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      setWishes(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Error fetching wishes:', error)
      toast.error('Failed to load messages. Please try again later.')
      setWishes([])
    } finally {
      setIsLoading(false)
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

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setWishes([data, ...wishes])
      setNewWish({ message: '', name: '' })
      toast.success('Message sent successfully!')
    } catch (error) {
      console.error('Error creating wish:', error)
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <SectionWrapper title="Message Wall" id="messages">
      <div className=" z-[6]">
        <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {isLoading ? (
            // Show loading skeleton
            [...Array(6)].map((_, i) => (
              <div 
                key={i}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 animate-pulse"
              >
                <div className="h-20 bg-white/20 rounded mb-4"></div>
                <div className="h-4 bg-white/20 rounded w-24 ml-auto"></div>
              </div>
            ))
          ) : wishes.length > 0 ? (
            wishes.map((wish) => (
              <div 
                key={wish.id} 
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-float"
              >
                <p className="mb-4 break-words overflow-hidden overflow-ellipsis">
                  {wish.message}
                </p>
                <p className="text-right text-sm italic truncate">- {wish.name}</p>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-white/60">
              No messages yet. Be the first to leave one!
            </div>
          )}
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

