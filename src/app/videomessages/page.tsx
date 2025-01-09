"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { VideoMessage } from "@/components/VideoMessage";
import Navbar from "@/components/Navbar";
import StarryBackground from "@/components/StarryBackground";
import { Loader } from "@/components/ui/loader";

export default function VideoMessages() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const messages = [
    {
      id: 1,
      title: "From Nayan Dada",
      description: "A heartfelt message from your loving brother",
      videoUrl: "/Videos/nayanwish.mp4", 
      thumbnail: "/Thumbnail/thumb1.jpeg"
    },
    {
      id: 2,
      title: "From Mayank & Viaana",
      description: "Sigma male showing his love",
      videoUrl: '/Videos/mayankwish.mp4',
      thumbnail: "/placeholder.webp"
    },
    {
      id: 3,
      title: "Vidhi Didi",
      description: "Happy bir... but why landscape video?",
      videoUrl: '/Videos/vidhiwishes.mp4',
      thumbnail: "/Thumbnail/thumb6.jpeg"
    },
    {
      id: 4,
      title: "From Tanush Dada",
      description: "Follow the orders🫡",
      videoUrl: '/Videos/tanushwish.mp4',
      thumbnail: "/Thumbnail/thumb3.jpeg"
    },
    {
      id: 5,
      title: "From Kashish",
      description: "Syllabus pending, vibes still unbothered!😎",
      videoUrl: '/Videos/kashishwish.mp4',
      thumbnail: "/placeholder.webp"
    },
    {
      id: 6,
      title: "From Balaji",
      description: "Screaming: it's my normal voice! 😆",
      videoUrl: '/Videos/balawish.mp4',
      thumbnail: "/placeholder.webp"
    },
    {
      id: 7,
      title: "From Riddhi",
      description: "Cuteness overload 🫠",
      videoUrl: '/Videos/riddhiwish.mp4',
      thumbnail: "/placeholder.webp"
    },
    {
      id: 8,
      title: "From Samidha",
      description: "Actors must be taking notes! 😏",
      videoUrl: '/Videos/samiwish.mp4',
      thumbnail: "/Thumbnail/thumb4.jpg"
    },
  ];

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-black">
        <Loader />
      </div>
    );
  }

  return (
    <main className="relative min-h-screen">
      <StarryBackground />
      <div className="bg-black/10 fixed inset-0 pointer-events-none" />
      <Navbar />
      
      <div className="pt-24 pb-12">
        <SectionWrapper title="Family Video Messages">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-[6]"
          >
            {messages.map((message) => (
              <VideoMessage key={message.id} {...message} />
            ))}
          </motion.div>
        </SectionWrapper>
      </div>
    </main>
  );
} 