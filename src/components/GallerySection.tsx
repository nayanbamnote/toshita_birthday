'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  { src: '/placeholder.svg', caption: 'Stargazing night' },
  { src: '/placeholder.svg', caption: 'Family picnic' },
  { src: '/placeholder.svg', caption: 'Birthday celebration' },
]

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Gallery</h2>
        <div className="relative">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].caption}
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <p className="text-white text-center mt-4">{images[currentIndex].caption}</p>
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}

