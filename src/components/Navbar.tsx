'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Video } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Messages', href: '#messages' },
    { 
      name: 'Special Messages', 
      href: '/videomessages',
      isSpecial: true,
      icon: <Video className="w-4 h-4" />
    },
  ]

  const scrollToElement = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    // Handle scrolling when pathname changes
    if (pathname === '/') {
      const hash = window.location.hash
      if (hash) {
        // Add a delay to ensure the page content is rendered
        const timeoutId = setTimeout(() => {
          scrollToElement(hash)
        }, 500) // Increased timeout to ensure content is loaded
        return () => clearTimeout(timeoutId)
      }
    }
  }, [pathname])

  const handleNavigation = async (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)  // Close mobile menu

    if (href.startsWith('#')) {
      if (pathname !== '/') {
        // Navigate to home page with the hash
        router.push(`/${href}`)
      } else {
        scrollToElement(href)
      }
    } else {
      router.push(href)
    }
  }

  return (
    <nav className="fixed top-0 w-full z-[9999] bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Special Messages - Always visible */}
          <div className="flex items-center">
            {navItems
              .filter(item => item.isSpecial)
              .map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href)}
                  className="bg-white/10 hover:bg-white/20 text-white flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium hover:scale-105 transition-all duration-300"
                >
                  {item.icon && item.icon}
                  {item.name}
                </Link>
              ))}
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {navItems
                .filter(item => !item.isSpecial)
                .map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href)}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white"
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - without Special Messages */}
      <motion.div 
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/30 backdrop-blur-sm">
          {navItems
            .filter(item => !item.isSpecial)
            .map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={(e) => handleNavigation(e, item.href)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  )
}