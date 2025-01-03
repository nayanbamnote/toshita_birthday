"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/LandingPage";
import ToshitaCard from "@/components/ToshitaCard";
import GallerySection from "@/components/GallerySection";
import MessageWall from "@/components/MessageWall";
import Footer from "@/components/Footer";
import StarryBackground from "@/components/StarryBackground";
import { Loader } from "@/components/ui/loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust this time as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="relative">
      <StarryBackground />
      <div className="bg-black/10 fixed inset-0 pointer-events-none"></div>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <HeroSection />
          <ToshitaCard />
          <GallerySection />
          <MessageWall />
        </div>
        <Footer />
      </div>
    </main>
  );
}

