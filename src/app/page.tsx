"use client"

import dynamic from 'next/dynamic'

const CosmicBackground = dynamic(() => import('@/components/CosmicBackground'), { ssr: false })

export default function Home() {
  return (
    <main className="w-full h-screen">
      <CosmicBackground />
    </main>
  )
}
