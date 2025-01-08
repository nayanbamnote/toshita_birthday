'use client'
import { motion } from 'framer-motion';
import { PartyPopper, Cake, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import confetti from 'canvas-confetti';
import { useState, useEffect } from 'react';

export default function FloatingPartyButtons() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const triggerConfetti = () => {
    const end = Date.now() + (isMobile ? 1.5 * 1000 : 3 * 1000);
    const colors = ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee'];
    
    (function frame() {
      confetti({
        particleCount: isMobile ? 4 : 7,
        angle: 60,
        spread: isMobile ? 40 : 55,
        origin: { x: 0 },
        colors: colors,
        disableForReducedMotion: true
      });
      confetti({
        particleCount: isMobile ? 4 : 7,
        angle: 120,
        spread: isMobile ? 40 : 55,
        origin: { x: 1 },
        colors: colors,
        disableForReducedMotion: true
      });
    
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  const triggerCakeEffect = () => {
    const defaults = {
      spread: isMobile ? 280 : 360,
      ticks: isMobile ? 50 : 70,
      gravity: 0,
      decay: 0.95,
      startVelocity: isMobile ? 20 : 30,
      shapes: ['star'],
      colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8'],
      disableForReducedMotion: true
    };

    function shoot() {
      confetti({
        ...defaults,
        particleCount: isMobile ? 20 : 40,
        scalar: isMobile ? 0.8 : 1.2,
        shapes: ['star']
      });

      confetti({
        ...defaults,
        particleCount: isMobile ? 5 : 10,
        scalar: isMobile ? 0.5 : 0.75,
        shapes: ['circle']
      });
    }

    shoot();
    if (!isMobile) {
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);
    }
  };

  const triggerMusicEffect = () => {
    const end = Date.now() + (isMobile ? 1 * 1000 : 2 * 1000);
    const colors = ['#1DB954', '#1ED760', '#20DF64'];

    (function frame() {
      confetti({
        particleCount: isMobile ? 1 : 2,
        angle: 60,
        spread: isMobile ? 60 : 75,
        origin: { x: 0 },
        colors: colors,
        shapes: ['circle'],
        gravity: 0.8,
        scalar: isMobile ? 1.5 : 2,
        drift: 0,
        ticks: isMobile ? 150 : 200,
        disableForReducedMotion: true
      });
      confetti({
        particleCount: isMobile ? 1 : 2,
        angle: 120,
        spread: isMobile ? 60 : 75,
        origin: { x: 1 },
        colors: colors,
        shapes: ['circle'],
        gravity: 0.8,
        scalar: isMobile ? 1.5 : 2,
        drift: 0,
        ticks: isMobile ? 150 : 200,
        disableForReducedMotion: true
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
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
      {typeof window !== 'undefined' && floatingButtons.map((button, i) => {
        const randomX = Math.random() * window.innerWidth * 0.8;
        const randomY = Math.random() * window.innerHeight * 0.8;
        const avoidCenter = (pos: number, size: number) => {
          const center = size / 2;
          const buffer = size * 0.3;
          return pos > center - buffer && pos < center + buffer 
            ? pos + (pos < center ? -buffer : buffer)
            : pos;
        };

        return (
          <motion.div
            key={i}
            className="absolute pointer-events-auto"
            initial={{
              x: randomX,
              y: randomY,
            }}
            animate={{
              x: [null, avoidCenter(Math.random() * window.innerWidth * 0.8, window.innerWidth)],
              y: [null, avoidCenter(Math.random() * window.innerHeight * 0.8, window.innerHeight)],
            }}
            transition={{
              duration: isMobile ? 10 + (i * 1.5) : 15 + (i * 2),
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
              type: "tween",
              translateZ: 0,
              willChange: "transform"
            }}
          >
            <Button 
              onClick={button.onClick}
              className={`${button.className} text-white p-3 rounded-full transform hover:scale-110 transition-all shadow-lg hover:shadow-xl`}
            >
              {button.icon}
            </Button>
          </motion.div>
        );
      })}
    </div>
  );
} 