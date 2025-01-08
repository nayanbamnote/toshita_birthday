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
    // Check for low-end devices (you can adjust these criteria)
    const isLowEnd = 
      navigator.hardwareConcurrency <= 4 || 
      /Android [1-4]/.test(navigator.userAgent);
    
    setShouldUseSimpleBg(isLowEnd);
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
        fps_limit: 60,
        particles: {
          number: {
            value: isMobile ? 30 : 100, // Reduce particles on mobile
            density: {
              enable: true,
              value_area: isMobile ? 600 : 800,
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
              speed: isMobile ? 0.5 : 1, // Slower animation on mobile
              minimumValue: 0.1,
              sync: false,
            },
          },
          size: {
            value: isMobile ? 2 : 3, // Smaller particles on mobile
            random: true,
            animation: {
              enable: true,
              speed: isMobile ? 1 : 2, // Slower animation on mobile
              minimumValue: 0.3,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: isMobile ? 0.3 : 0.5, // Slower movement on mobile
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
            attract: {
              enable: isMobile ? false : true, // Disable attraction on mobile
              rotateX: 600,
              rotateY: 1200,
            },
          },
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: {
                enable: !isMobile, // Disable hover effects on mobile
                mode: "grab",
              },
            },
            modes: {
              grab: {
                distance: 150,
                links: {
                  opacity: 0.3,
                },
              },
            },
          },
        },
        retina_detect: true, // Optimize for retina displays
        motion: {
          disable: isMobile, // Disable motion on mobile
        },
      }}
      loaded={particlesLoaded}
    />
  );
} 