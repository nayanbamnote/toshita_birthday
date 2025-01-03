'use client'
import { motion } from 'framer-motion';
import { PartyPopper, Cake, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import confetti from 'canvas-confetti';

const triggerConfetti = () => {
  const end = Date.now() + (3 * 1000);
  const colors = ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee'];
  
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
  const defaults = {
    spread: 360,
    ticks: 70,
    gravity: 0,
    decay: 0.95,
    startVelocity: 30,
    shapes: ['star'],
    colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
  };

  function shoot() {
    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ['star']
    });

    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ['circle']
    });
  }

  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
};

const triggerMusicEffect = () => {
  const end = Date.now() + (2 * 1000);
  const colors = ['#1DB954', '#1ED760', '#20DF64'];

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 75,
      origin: { x: 0 },
      colors: colors,
      shapes: ['circle'],
      gravity: 0.8,
      scalar: 2,
      drift: 0,
      ticks: 200
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 75,
      origin: { x: 1 },
      colors: colors,
      shapes: ['circle'],
      gravity: 0.8,
      scalar: 2,
      drift: 0,
      ticks: 200
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

export default function FloatingPartyButtons() {
  return (
    <div className="fixed inset-0 pointer-events-auto z-30">
      {typeof window !== 'undefined' && floatingButtons.map((button, i) => {
        const randomX = Math.random() * window.innerWidth * 0.8;
        const randomY = Math.random() * window.innerHeight * 0.8;
        const avoidCenter = (pos: number, size: number) => {
          const center = size / 2;
          const buffer = size * 0.3; // 30% of screen size as buffer
          return pos > center - buffer && pos < center + buffer 
            ? pos + (pos < center ? -buffer : buffer)
            : pos;
        };

        return (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: randomX,
              y: randomY,
            }}
            animate={{
              x: [null, avoidCenter(Math.random() * window.innerWidth * 0.8, window.innerWidth)],
              y: [null, avoidCenter(Math.random() * window.innerHeight * 0.8, window.innerHeight)],
            }}
            transition={{
              duration: 15 + (i * 2),
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
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