import Navbar from "@/components/Navbar";
import HeroSection from "@/components/LandingPage";
import ToshitaCard from "@/components/ToshitaCard";
import GallerySection from "@/components/GallerySection";
import MessageWall from "@/components/MessageWall";
import Footer from "@/components/Footer";
import StarryBackground from "@/components/StarryBackground";

export default function Home() {
  return (
    <main className="relative">
      <StarryBackground />
      <div className="bg-black/10 fixed inset-0 pointer-events-none"></div>
      <Navbar />
      <HeroSection />
      <ToshitaCard />
      <GallerySection />
      <MessageWall />
      <Footer />
    </main>
  )
}

