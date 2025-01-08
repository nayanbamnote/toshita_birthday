'use client'
import { motion } from 'framer-motion';
import { PartyPopper, Cake, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import confetti from 'canvas-confetti';
import { useState, useEffect } from 'react';

export default function FloatingPartyButtons() {
  const [isMobile, setIsMobile] = useState(false);
  const [positions] = useState(() => {
    // Pre-calculate random positions to avoid recalculation
    return Array(3).fill(0).map(() => ({
      x: Math.random() * 0.8,
      y: Math.random() * 0.8
    }));
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const triggerConfetti = () => {
    if (isMobile) {
      // Single burst for mobile
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.6 },
        disableForReducedMotion: true
      });
      return;
    }
    
    // Original effect for desktop
    const end = Date.now() + 3000;
    const colors = ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff'];
    
    (function frame() {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });
    
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  const triggerCakeEffect = () => {
    confetti({
      particleCount: isMobile ? 20 : 40,
      spread: isMobile ? 50 : 70,
      origin: { y: 0.6 },
      colors: ['FFE400', 'FFBD00', 'E89400'],
      disableForReducedMotion: true
    });
  };

  const triggerMusicEffect = () => {
    confetti({
      particleCount: isMobile ? 15 : 30,
      spread: isMobile ? 40 : 60,
      origin: { y: 0.6 },
      colors: ['#1DB954', '#1ED760'],
      disableForReducedMotion: true
    });
  };

  const floatingButtons = [
    { 
      icon: <PartyPopper className="w-6 h-6" />, 
      onClick: triggerConfetti,
      className: "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
    },
    { 
      icon: <Cake className="w-6 h-6" />, 
      onClick: triggerCakeEffect,
      className: "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
    },
    { 
      icon: <Music className="w-6 h-6" />, 
      onClick: triggerMusicEffect,
      className: "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[5]">
      {positions.map((pos, i) => {
        const button = floatingButtons[i];
        return (
          <motion.div
            key={i}
            className="absolute pointer-events-auto"
            initial={{ 
              x: pos.x * window.innerWidth,
              y: pos.y * window.innerHeight 
            }}
            animate={{
              x: [
                pos.x * window.innerWidth,
                ((pos.x + 0.2) % 0.8) * window.innerWidth
              ],
              y: [
                pos.y * window.innerHeight,
                ((pos.y + 0.2) % 0.8) * window.innerHeight
              ]
            }}
            transition={{
              duration: isMobile ? 8 : 12,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
              type: "tween",
              translateZ: 0,
              willChange: "transform",
              // Reduce animation complexity
              stiffness: isMobile ? 50 : 100,
              damping: isMobile ? 10 : 20
            }}
          >
            <Button 
              onClick={button.onClick}
              className={`${button.className} text-white p-3 rounded-full transform transition-transform duration-200 shadow-lg`}
            >
              {button.icon}
            </Button>
          </motion.div>
        );
      })}
    </div>
  );
} 