'use client'

import { useCallback, useEffect, useState } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function StarryBackground() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldUseSimpleBg, setShouldUseSimpleBg] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Only use simple background for very low-end devices
    const isVeryLowEnd = 
      navigator.hardwareConcurrency <= 2 || 
      /Android [1-3]/.test(navigator.userAgent);
    
    setShouldUseSimpleBg(isVeryLowEnd);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {
    setIsLoaded(true);
    return Promise.resolve();
  }, []);

  if (shouldUseSimpleBg) {
    return (
      <div 
        className="fixed inset-0 -z-10 pointer-events-none bg-gradient-to-b from-black via-purple-900/20 to-black"
        style={{
          backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
    );
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 -z-10 pointer-events-none"
      options={{
        background: {
          color: "transparent",
        },
        fps_limit: isMobile ? 30 : 60, // Lower FPS on mobile
        particles: {
          number: {
            value: isMobile ? 20 : 100, // Further reduce particles on mobile
            density: {
              enable: true,
              value_area: isMobile ? 800 : 800, // Keep area consistent
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.8,
            random: true,
            animation: {
              enable: true,
              speed: 0.8, // Consistent animation speed
              minimumValue: 0.1,
              sync: false,
            },
          },
          size: {
            value: isMobile ? 1.5 : 3, // Smaller particles on mobile
            random: true,
            animation: {
              enable: true,
              speed: 1.5, // Consistent animation speed
              minimumValue: 0.3,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 0.4, // Consistent, optimized speed
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "bounce", // Change to bounce to keep particles in view
            },
            attract: {
              enable: true,
              rotateX: 300, // Reduced rotation values
              rotateY: 600,
            },
          },
          interactivity: {
            detectsOn: "canvas", // Change to canvas for better performance
            events: {
              onHover: {
                enable: true,
                mode: "bubble", // Change to bubble for lighter effect
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 100,
                size: 4,
                duration: 0.3,
                opacity: 0.8,
              },
            },
          },
        },
        retina_detect: true,
        smooth: true, // Enable smooth animations
        detectRetina: true,
        performance: {
          maxParticles: isMobile ? 20 : 100,
        },
      }}
      loaded={particlesLoaded}
    />
  );
} 